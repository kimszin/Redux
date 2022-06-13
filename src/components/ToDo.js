import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../Store';

function ToDo(props) {
  return (
    <li>
      <Link to={`/${props.id}`}>
        {props.text}
      </Link>
      <button onClick={props.onBtnClick}>DEL</button>
    </li>
  )
}
// ownProps : ToDo 컴포넌트에 전달되는 원래 props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo)