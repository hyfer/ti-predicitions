import {
  MENU_OVERLAY_IS_OPEN,
  MENU_OVERLAY_IS_CLOSED,
} from '../../constants/actionTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_OVERLAY_IS_OPEN:
      return {
        ...state,
        ...action,
      };

    case MENU_OVERLAY_IS_CLOSED:
      return {
        ...state,
        ...action,
      };

    default:
      return state;
  }
};

export default reducer;
