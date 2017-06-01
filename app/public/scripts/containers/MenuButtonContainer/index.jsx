import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import toggleMenuOverlay from '../../redux/actions/menuOverlay';

import MenuButton from '../../components/MenuButton';

const mapStateToProps = state => ({
  isToggled: state.menuOverlay.isToggled,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleMenuOverlay,
  }, dispatch)
);

const MenuButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuButton);

export default MenuButtonContainer;
