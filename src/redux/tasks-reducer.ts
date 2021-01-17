import {v1} from "uuid";
import {ActionsType, AddTaskActionType, TaskStateType, TaskType, TodoListType} from "../types/types";





let initialState:TaskStateType =  {

}


export const removeTaskAC = (todoID: string, taskID: string) => {
    return {
        type: "REMOVE-TASK",
        todoID: todoID,
        taskID: taskID
    }
}

export const addTaskAC = (title: string, todoListID: string): AddTaskActionType => {

    return {
        type: "ADD-TASK",
        title: title,
        todoListID: todoListID
    }
}
export const changeTaskStatusAC = (taskID:string, todoListID: string, isDone: boolean)  => {

    return {
        type: "ADD-TASK",
        taskID: taskID,
        todoListID: todoListID,
        isDone: isDone
    }
}


export const tasksReducer = (state = initialState , action:ActionsType):TaskStateType => {
        switch (action.type){
            case "REMOVE-TASK": {
                return {...state,[action.todoID]: state[action.todoID].filter(t => t.id !== action.taskID)}
            }
            case "ADD-TODOLIST" :
                console.log(state[action.todoListID])
                const stateCopy = {...state}
                stateCopy[action.todoListID] = [];
                return stateCopy;

            case "ADD-TASK": {
                debugger;
                // const newTask: TaskType = {x
                //     id: v1(),
                //     title: action.title,
                //     isDone: false
                // }
                //
                // return {...state,[action.todoListID]:[newTask,...state[action.todoListID]] }
                const copyState = {...state}
                const newTask: TaskType = {
                    id: v1(),
                    title: action.title,
                    isDone: false
                }
                let tasks = copyState[action.todoListID];
                copyState[action.todoListID] = [newTask, ...tasks]

                return copyState

            }
            // case "CHANGE-TASK-STATUS": {
            //     return  {...state,[action.todoListID]: state[action.todoListID].map(t =>{
            //      if(t.id === action.taskID) {
            //         t.isDone = action.isDone;
            //      }
            //
            //     }
            //     })}
            case "CHANGE-TASK-STATUS": {
                return {...state,[action.todoListID]: state[action.todoListID].map( el => {
                    if(el.id === action.taskID) {
                        el.isDone = action.isDone
                    }
                    return el;
                    })}
            }
            default:
                return state;

        }

}



