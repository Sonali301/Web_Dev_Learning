// reducers
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }], // initial state

};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(), // nanoid => to generate new id like uuid
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);  // direct mitation of the array , it is because of redux toolkit
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        // marksAsDone: (state, action) => {
        //     state.todos = state.todos.map((todo) => {
        //         if (todo.id === action.payload) {
        //             todo.isDone = true;
        //         }
        //     });
        //     return todo;

        // },
        marksAsDone: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isDone = true;
            }
        }
        
    },
});

export const {addTodo, deleteTodo, marksAsDone} = todoSlice.actions;
export default todoSlice.reducer;



