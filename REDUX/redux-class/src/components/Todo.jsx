import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    const dispatch = useDispatch();

    const clickHandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    };

    const toggleDoneHandler = (id) => {
        dispatch(marksAsDone(id));
    };

    return (
        <>
            <AddForm />
            <h3>Todo List App</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.isDone ? "line-through" : "none",
                            }}
                        >
                            {todo.task}
                        </span>
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => toggleDoneHandler(todo.id)}>Mark as Done</button>
                    </li>
                ))}
            </ul>
        </>
    );
}