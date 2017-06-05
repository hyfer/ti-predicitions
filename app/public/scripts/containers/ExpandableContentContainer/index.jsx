import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import toggleExpandableContent from '../../redux/actions/expandableContent';

import ExpandableContent from '../../components/ExpandableContent';

const mapStateToProps = state => ({
  isToggled: state.expandableContent.isToggled,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleExpandableContent,
  }, dispatch)
);

const ExpandableContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpandableContent);

export default ExpandableContentContainer;
