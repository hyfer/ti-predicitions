const express          = require('express');
const bodyParser       = require('body-parser');
const chokidar         = require('chokidar'); // watcher

const app = express();
const port = 8000;

app.use(express.static('dist')) // serve static folder
app.use(express.static('app/public/static')) // serve static folder

app.use(bodyParser.urlencoded({ extended: true }));


// set views engine and folder
app.set('views', './app/views') // specify the views directory
app.set('view engine', 'twig');

var watcher = chokidar.watch('./app');

watcher.on('ready', function() {
  watcher.on('all', function() {
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]app[\/\\]/.test(id)) delete require.cache[id]
    })
  })
})

require('./app/routes')(app);

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
