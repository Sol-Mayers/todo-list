import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/features/filters/filters-slice";
import styles from "./Filters.module.scss";

export const Filters = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state) => state.filter);

    const handleFilter = (val) => dispatch(setFilter(val));

    return (
        <div className={styles.filtersWrapper}>
            <button
                onClick={() => handleFilter("all")}
                style={{
                    color:
                        activeFilter === "all" ? "rgba(248, 181, 94)" : "white",
                }}
                className={styles.filtersItem}
            >
                все!!
            </button>
            <button
                onClick={() => handleFilter("active")}
                style={{
                    color:
                        activeFilter === "active"
                            ? "rgba(248, 181, 94)"
                            : "white",
                }}
                className={styles.filtersItem}
            >
                активные
            </button>
            <button
                onClick={() => handleFilter("completed")}
                style={{
                    color:
                        activeFilter === "completed"
                            ? "rgba(248, 181, 94)"
                            : "white",
                }}
                className={styles.filtersItem}
            >
                завершённые
            </button>
        </div>
    );
};
