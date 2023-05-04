import { useSelector, useDispatch } from "react-redux";
import {
    removeTodo,
    toggleTodo,
    changeTodo,
    showChangingField,
} from "../store/todos/todos-actions";
import { selectVisibleTodos } from "../store/todos/todos-selectors";
import { useState } from "react";
import { selectActiveFilter } from "../store/filters/filters-selectors";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter);
    const todos = useSelector((state) =>
        selectVisibleTodos(state, activeFilter)
    );
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = (itemId, itemValue) => {
        if (value.length !== 0) {
            dispatch(changeTodo(itemId, itemValue));
            setValue("");
        } else {
            setVisible(true);
        }
    };

    const writeText = (event) => {
        setVisible(false);
        setValue(event.target.value);
    };

    return (
        <ul className={styles.listWrapper}>
            {todos.map((todo) => (
                <li key={todo.id} className={styles.listItem}>
                    <div className={styles.innerFirstWrapper}>
                        <div className={styles.innerWrapper}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo.id))}
                                className={styles.listCheck}
                            />{" "}
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    dispatch(showChangingField(todo.id))
                                }
                                className={styles.listText}
                            >
                                {todo.title}
                                <div className={styles.changeText}>
                                    Изменить
                                </div>
                            </div>{" "}
                        </div>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className={styles.deleteButton}
                        >
                            удалить
                        </button>
                    </div>

                    {todo.changing && (
                        <div className={styles.changeBlock}>
                            <input type="text" onChange={writeText} />
                            <div
                                className={visible ? styles.show : styles.hide}
                            >
                                Поле не может быть пустым
                            </div>
                            <button
                                onClick={() => handleSubmit(todo.id, value)}
                            >
                                Изменить
                            </button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};