import { todosReducer } from "./features/todos/todos-slice";
import { filterReducer } from "./features/filters/filters-slice";
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

// export const cofigureStore = () => {
//     const persistedState = loadState();
//     const store = createStore(
//         rootReducer,
//         persistedState,
//         window.__REDUX_DEVTOOLS_EXTENSION__ &&
//             window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

//     store.subscribe(
//         throttle(() => {
//             saveState({
//                 todos: store.getState().todos,
//             });
//         }, 1000)
//     );

//     return store;
// };
