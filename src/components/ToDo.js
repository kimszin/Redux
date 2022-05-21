import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../Store'

const ToDo = (props) => {
  return (
    <li>
      <Link to={`/${props.id}`}>
        {props.text} <button onClick={props.onBtnClick}>DEL</button>
      </Link>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo)