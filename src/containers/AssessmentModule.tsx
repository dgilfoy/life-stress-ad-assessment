import BasicPage from '../components/BasicPage';
import {modules} from '../res/data/modules';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state, ownProps) => {
  let module = modules.filter(mod => ( parseInt(ownProps.params.id) === mod.id))[0];
  return {
    title: module.title,
    page: {title: 'Overview', subtitle: module.title + ' Module', content: module.content},
    image: module.img && !(state.device.width > 600 || state.device.width > state.device.height)? module.img : '',
    
    actions: [
      {label: 'Assessments', action: ownProps.pathOnTouchTap('main/assessments/' + module.id)},
      {label: 'Videos', action: ownProps.pathOnTouchTap('main/videos')},
      {label: 'Library', action: ownProps.pathOnTouchTap('main/library')}
      
    ]
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(BasicPage);