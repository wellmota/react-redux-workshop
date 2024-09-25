import { createSlice } from "@reduxjs/toolkit"
import name from "./name"

export const todos = createSlice({
  name,
  initialState: {
    todo: [],
    doing: [],
    done: [],
  },
  reducers: {
    createTodo: (state, { payload }) => {},
  },
})

export const { createTodo } = todos.actions

export default todos.reducer
