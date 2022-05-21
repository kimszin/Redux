import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'

const Detail = ({ toDos }) => {
  const { id } = useParams();
  const data = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h1>{data.text}</h1>
      <div>{id}</div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    toDos: state
  }
}

export default connect(mapStateToProps)(Detail)