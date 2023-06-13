import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// store : state가 하나면 객체로 감쌀 필요없지만 확장 가능성을 위해 객체로 만들어두자.
// reducer: { toDos.reducer } ==> reducer: { toDos: toDos.reducer }
const store = configureStore({ reducer: { toDos: toDos.reducer } });

export const { add, remove } = toDos.actions;

export default store;
