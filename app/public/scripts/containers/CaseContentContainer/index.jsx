import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import toggleExpandableContent from '../../redux/actions/expandableContent';

import CaseContent from '../../components/CaseContent';

// const mapStateToProps = state => ({
//   isToggled: state.expandableContent.isToggled,
// });

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleExpandableContent,
  }, dispatch)
);

const CaseContentContainer = connect(
  // mapStateToProps,
  mapDispatchToProps,
)(CaseContent);

export default CaseContentContainer;
