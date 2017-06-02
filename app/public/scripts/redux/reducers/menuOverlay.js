import {
  MENU_OVERLAY_IS_TOGGLED,
} from '../../constants/actionTypes';

const initialState = {
  isToggled: false,
};

// TODO: Add state for isClosing and isOpening. Might be useful for animations.

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_OVERLAY_IS_TOGGLED:
      return {
        ...state,
        isToggled: !state.isToggled,
      };

    default:
      return state;
  }
};

export default reducer;
