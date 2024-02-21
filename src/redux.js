const { createSlice, configureStore } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };
      state.push(newTask);
    },
    // {type: "todo/addTask", payload:"sortir le chien"}
    toggleTask: (state, action) => {
      // {type:"todo/toggleTask", payload:20}
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      // {type:"todo/deleteTask", payload:"20"}
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});
// une action c'est un nom (type) comme "DELETE_TASK" et des données(payload) comme "faire le ménage"

// Creation Actions
export const { addTask, toggleTask, deleteTask } = todoSlice.actions;

// Création d'un store

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
