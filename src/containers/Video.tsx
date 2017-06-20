import Video from '../components/Video';
import * as videos from '../res/data/videos';
import {modules} from '../res/data/modules';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

const stateToProps = (state, ownProps) => {
  let module = modules.filter(mod => ( parseInt(ownProps.params.mid) === mod.id)),
    modVidsStr = module[0].videos,
    vids = videos[modVidsStr + 'Vids']
  return {
    video: vids[ownProps.params.id],
    screenWidth: state.device.width < 400 ? state.device.width : 400
  }
}
const dispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(stateToProps,dispatchToProps)

(Video);