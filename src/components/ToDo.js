import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../Store';

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
    onBtnClick: () => dispatch(remove(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo)