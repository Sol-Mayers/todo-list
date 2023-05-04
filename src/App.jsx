import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";
import { Filters } from "./components/Filters";
import "./App.scss";

export default function App() {
    return (
        <div className="App">
            <h1 className="appTitle">Список задач</h1>
            <NewTodo />
            <Filters />
            <TodoList />
        </div>
    );
}
