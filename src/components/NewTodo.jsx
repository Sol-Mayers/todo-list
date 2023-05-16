import { useDispatch } from "react-redux";
import { addTodo } from "../store/features/todos/todos-slice";
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
                <div className={styles.taskWrapper}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Новая задача..."
                        onInput={() => setVisible(false)}
                        className={styles.taskField}
                    />
                    <input
                        type="submit"
                        value="Добавить"
                        className={styles.addButton}
                    />
                    <div className={visible ? styles.show : styles.hide}>
                        Поле не может быть пустым
                    </div>
                </div>
            </form>
        </div>
    );
};
