import {
  MENU_OVERLAY_IS_TOGGLED,
} from '../../constants/actionTypes';

// TODO: Add state for closing and opening. Might be useful for animations.

const toggleMenuOverlay = () => ({
  type: MENU_OVERLAY_IS_TOGGLED,
});

export default toggleMenuOverlay;
