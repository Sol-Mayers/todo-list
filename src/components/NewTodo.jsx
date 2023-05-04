import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-actions";
import { useState } from "react";
import styles from "./NewTodo.module.scss";

export const NewTodo = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.title.value.length !== 0) {
            dispatch(addTodo(event.target.title.value));
        } else {
            setVisible(true);
        }

        event.target.reset();
    };

    return (
        <div className={styles.todoWrapper}>
            <form onSubmit={handleSubmit} className={styles.addField}>
                <input
                    type="text"
                    name="title"
                    placeholder="Новая задача..."
                    onInput={() => setVisible(false)}
                />
                <input type="submit" value="Добавить" />
                <div className={visible ? styles.show : styles.hide}>
                    Поле не может быть пустым
                </div>
            </form>
        </div>
    );
};
