import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../Store';
import ToDo from '../components/ToDo';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo text={toDo.text} id={toDo.id} key={toDo.id} />
        ))}
      </ul>
    </>
  )
}
// store(중앙저장소)의 state를 컴포넌트의 props로 전달
const mapStateToProps = (state) => {
  return { toDos: state };
}
// store(중앙저장소)의 dispatch를 컴포넌트의 props로 전달
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);