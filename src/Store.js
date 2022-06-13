import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
// action creator
const addToDo = (text) => {
  return {
    type: ADD,
    text
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id)
  };
};
// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}
export const actionCreators = {
  addToDo,
  deleteToDo,
}
// store
const store = createStore(reducer);
export default store;