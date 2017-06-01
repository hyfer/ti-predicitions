import {
  MENU_OVERLAY_IS_TOGGLED,
} from '../../constants/actionTypes';

const initialState = {
  isToggled: false,
};

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
