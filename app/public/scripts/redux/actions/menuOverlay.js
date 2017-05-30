import {
  MENU_OVERLAY_IS_OPEN,
  MENU_OVERLAY_IS_CLOSED,
} from '../../constants/actionTypes';

// TODO: Add state for closing and opening. Might be useful for animations.

export const closeMenuOverlay = () => ({
  type: MENU_OVERLAY_IS_OPEN,
});

export const openMenuOverlay = () => ({
  type: MENU_OVERLAY_IS_CLOSED,
});
