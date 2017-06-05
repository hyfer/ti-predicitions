import {
  MENU_OVERLAY_IS_TOGGLED,
} from '../../constants/actionTypes';

const toggleMenuOverlay = isToggled => ({
  type: MENU_OVERLAY_IS_TOGGLED,
  isToggled,
});

export default toggleMenuOverlay;
