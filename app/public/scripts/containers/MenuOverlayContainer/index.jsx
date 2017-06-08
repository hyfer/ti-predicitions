import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import toggleMenuOverlay from 'redux/actions/menuOverlay';

import MenuOverlay from 'components/MenuOverlay';

const mapStateToProps = state => ({
  isToggled: state.menuOverlay.isToggled,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleMenuOverlay,
  }, dispatch)
);

const MenuOverlayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuOverlay);

export default MenuOverlayContainer;
