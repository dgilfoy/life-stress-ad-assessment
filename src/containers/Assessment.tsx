import Assessment from '../components/Assessment';
import {ItemInterface} from '../components/Assessment';
import {assessments} from '../res/data/assessments';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import {ValidationResultInterface} from '../components/Form';
import {addAssessmentResult} from '../actions/assessments'

function validate(data){
  let hasErrors = false;
  const reduceCb = (errors, name) => {
    if(data[name].length === 0){
      hasErrors = true;
      errors[name] = 'Required.';
    } else {
      errors[name] = '';
    }
    
    return errors;
  };

  const errors = Object.keys(data)
    .map((propName) => propName)
    .reduce(reduceCb,{});
  return {
    data: errors,
    isValid: !hasErrors
  }
}


const stateToProps = (state,ownProps) => {
  let questions = [];
  if(typeof assessments[ownProps.params.id] !== 'undefined'){
    questions = assessments[ownProps.params.id].calcQuestions({})
  }

  return {
    item: assessments[ownProps.params.id] as ItemInterface,
    values: state.assessmentResults[ownProps.params.id] ? state.assessmentResults[ownProps.params.id] : false,
    questions
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    submitData: (data) => {
      dispatch(addAssessmentResult(ownProps.params.id,data));
      dispatch(push('/main/assessmentresult/' + ownProps.params.id));
      window.scrollTo(0,0);
    },
    validateData: (data: any): ValidationResultInterface => {
      return validate(data);
    },
    cancel: ownProps.pathOnTouchTap('/main/assessments')
  }
}
export default connect(stateToProps,dispatchToProps)

(Assessment);