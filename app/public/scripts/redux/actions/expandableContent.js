import {
  EXPANDABLE_CONTENT_IS_TOGGLED,
} from '../../constants/actionTypes';

const toggleExpandableContent = isToggled => ({
  type: EXPANDABLE_CONTENT_IS_TOGGLED,
  isToggled,
});

export default toggleExpandableContent;
