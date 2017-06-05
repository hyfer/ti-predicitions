import {
  EXPANDABLE_CONTENT_IS_TOGGLED,
} from '../../constants/actionTypes';

const initialState = {
  isToggled: false,
};

// TODO: Add state for isClosing and isOpening. Might be useful for animations.

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPANDABLE_CONTENT_IS_TOGGLED:
      return {
        ...state,
        ...action,
      };

    default:
      return state;
  }
};

export default reducer;
