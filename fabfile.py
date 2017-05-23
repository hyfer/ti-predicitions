
# command to fab deploy site to staging:
# fab use:stage deploy
# command to dump database to staging:
# fab use:stage put_database:dump=databasefilename.sql
import tempfile
import shutil
import time
import os.path
from fabric.api import task, abort, execute, env, local, lcd, run, put, cd, sudo, get
from fabric.contrib.project import rsync_project
from fabric.contrib.console import confirm
REPO_URL = 'git@code.humbl.be:internal-projects/new-humblebee-react.git'
ENV = {
    'stage': {
        'hosts': ['node-stage.humbl.be'],
        'branch': 'stage',
        'domain': 'humblebee.nstage.humbl.be'
    }
}
SCOPE = {
    'global': None,
    'temp': None,
    'current': 'global'
}
def conf():
    return ENV[SCOPE[SCOPE['current']]]
def task_use(func):
    @task(name=func.__name__)
    def wrapper(target=None, *args, **kwargs):
        global SCOPE
        if target is not None or SCOPE['global'] is None:
            if target not in ENV:
                abort('Invalid environment.')
            SCOPE['temp'] = target
            SCOPE['current'] = 'temp'
        else:
            SCOPE['current'] = 'global'
        _conf = conf()
        kwargs.update({'hosts': _conf['hosts']})
        execute(func, *args, **kwargs)
    return wrapper
@task
def use(target=None):
    if target not in ENV:
        abort('Invalid environment.')
    env.hosts = ENV[target]['hosts']
    global SCOPE
    SCOPE['global'] = target
    SCOPE['current'] = 'global'
@task_use
def deploy():
    config = conf()
    project_tmp = tempfile.mkdtemp()
    project_folder = time.strftime('%Y%m%d_%H%M%S')
    local('git clone --depth 1 --branch %s %s %s' % (config['branch'], REPO_URL, project_tmp))
    with lcd(project_tmp):
        local('npm install')
        # local('./node_modules/bower/bin/bower -f install')
        local('rm -rf .git')
        local('rm -rf .sass-cache')
        local('rm -rf src')
        sudo('rm -rf /tmp/{0}'.format(config['domain']))
        run('mkdir -p /tmp/{0}'.format(config['domain']))
        local('tar cvf {0}.tar.gz .'.format(config['domain']))
        put('{0}.tar.gz'.format(config['domain']), '/tmp/{0}/{0}.tar.gz'.format(config['domain']))
    shutil.rmtree(project_tmp)
    with cd('/tmp/{0}'.format(config['domain'])):
        run('tar xvf {0}.tar.gz'.format(config['domain']))
        run('rm {0}.tar.gz'.format(config['domain']))
    sudo('mv /tmp/{0} /var/www/{0}/releases/{1}'.format(config['domain'], project_folder))
    with cd('/var/www/{0}'.format(config['domain'])):
        sudo('ln -fsn /var/www/{0}/releases/{1} /var/www/{0}/current'.format(config['domain'], project_folder))
        #if SCOPE['temp'] != 'stage':
            #sudo('rm /var/www/{0}/current/stage-config.php'.format(config['domain']))
        sudo('cp /var/www/{0}/shared/{1} /var/www/{0}/current/{1}'.format(config['domain'], '.env'))
        sudo('chmod 755 releases/*')
        sudo('chown -R www-data:www-data *')

    with cd('/var/www/{0}/current'.format(config['domain'])):
        sudo('chmod 777 -R node_modules')
        sudo('npm rebuild node-sass')

    sudo('service nginx reload')
    sudo('service pm2-root restart')
    sudo('service mongodb restart')
