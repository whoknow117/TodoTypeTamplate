import {combineReducers, createStore} from 'redux';
import {tasksReducer} from "./tasks-reducer";
import {todoListReducer} from "./todoList-reducer";


const rootReducer = combineReducers({
    todoLists: todoListReducer,
    tasks: tasksReducer
})


export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
//
// window.store = store;

