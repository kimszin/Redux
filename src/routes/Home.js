import React, { useState } from "react";
// import { connect } from "react-redux";
import { add } from "../Store";
import ToDo from "../components/ToDo";
import { useSelector, useDispatch } from "react-redux";

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  content: {
    border: "1px solid black",
    padding: "20px",
  },
};

function Home() {
  const { toDos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1>ToDo</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} />
          <button>Add</button>
        </form>
        <ul>
          {toDos.map((toDo) => (
            <ToDo text={toDo.text} id={toDo.id} key={toDo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
// store(중앙저장소)의 state를 컴포넌트의 props로 전달
// const mapStateToProps = (state) => {
//   return { toDos: state };
// }
// store(중앙저장소)의 dispatch를 컴포넌트의 props로 전달
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToDo: text => dispatch(add(text))
//   };
// }

export default Home;
