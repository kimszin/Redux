import React from "react";
// import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  content: {
    border: "1px solid black",
    padding: "20px 40px 20px 40px",
  },
};

function Detail() {
  const { toDos } = useSelector((state) => state);
  const { id } = useParams();
  const data = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1>detail</h1>
        <br />
        <div>{data.text}</div>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     toDos: state,
//   };
// };

export default Detail;
