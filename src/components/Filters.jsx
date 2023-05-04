import { useSelector, useDispatch } from "react-redux";
import { selectActiveFilter } from "../store/filters/filters-selectors";
import { setFilter } from "../store/filters/filters-actions";
import styles from "./Filters.module.scss";

const Filters = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter);

    return (
        <div className={styles.filtersWrapper}>
            <button
                onClick={() => dispatch(setFilter("all"))}
                style={{ color: activeFilter === "all" ? "red" : "black" }}
                className={styles.filtersItem}
            >
                все
            </button>
            <button
                onClick={() => dispatch(setFilter("active"))}
                style={{ color: activeFilter === "active" ? "red" : "black" }}
                className={styles.filtersItem}
            >
                активные
            </button>
            <button
                onClick={() => dispatch(setFilter("completed"))}
                style={{
                    color: activeFilter === "completed" ? "red" : "black",
                }}
                className={styles.filtersItem}
            >
                завершённые
            </button>
        </div>
    );
};

export { Filters };
