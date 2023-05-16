import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./TodoList.module.scss";
import {
    removeTodo,
    toggleTodo,
    changeTodo,
    showChangingField,
    selectVisibleTodos,
} from "../store/features/todos/todos-slice";

export const TodoList = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state) => state.filter);
    const todos = useSelector((state) =>
        selectVisibleTodos(state, activeFilter)
    );
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = (itemId, itemValue) => {
        if (value.length !== 0) {
            dispatch(changeTodo({ id: itemId, title: itemValue }));
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
                            <input
                                type="text"
                                onChange={writeText}
                                className={styles.changingField}
                            />
                            <div
                                className={visible ? styles.show : styles.hide}
                            >
                                Поле не может быть пустым
                            </div>
                            <button
                                onClick={() => handleSubmit(todo.id, value)}
                                className={styles.changeButton}
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
