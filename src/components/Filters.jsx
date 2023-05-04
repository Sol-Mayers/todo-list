import { Link, useParams } from "react-router-dom";
import styles from "./Filters.module.scss";

const Filters = () => {
    const { filter: activeFilter = "all" } = useParams();

    return (
        <div className={styles.filtersWrapper}>
            <Link
                to="/all"
                style={{ color: activeFilter === "all" ? "red" : "black" }}
                className={styles.filtersItem}
            >
                все
            </Link>
            <Link
                to="/active"
                style={{ color: activeFilter === "active" ? "red" : "black" }}
                className={styles.filtersItem}
            >
                активные
            </Link>
            <Link
                to="/completed"
                style={{
                    color: activeFilter === "completed" ? "red" : "black",
                }}
                className={styles.filtersItem}
            >
                завершённые
            </Link>
        </div>
    );
};

export { Filters };
