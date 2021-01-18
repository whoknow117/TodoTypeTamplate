import {v1} from "uuid";
import {
    ActionsType,
    AddTaskActionType,
    ChangeTaskStatusActionType, ChangeTaskTitleActionType,
    TaskStateType,
    TaskType,
    TodoListType
} from "../types/types";





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
export const changeTaskStatusAC = (taskID:string, todoListID: string, isDone: boolean): ChangeTaskStatusActionType  => {

    return {
        type: "CHANGE-TASK-STATUS",
        taskID: taskID,
        todoListID: todoListID,
        isDone: isDone
    }
}

export const changeTaskTitleAC = (taskID:string, todoListID: string, title: string): ChangeTaskTitleActionType  => {

    return {
        type: "CHANGE-TASK-TITLE",
        taskID: taskID,
        todoListID: todoListID,
        title: title
    }
}


export const tasksReducer = (state = initialState , action:ActionsType):TaskStateType => {
        switch (action.type){

            case "CHANGE-TASK-TITLE": {

                return {...state,[action.todoListID]: state[action.todoListID].map( t => {
                    if(t.id === action.taskID){
                        return {...t, title: action.title}
                    }
                    return t;
                    })}
            }

            case "CHANGE-TASK-STATUS" : {
                debugger;
                console.log('wtf?')
                return {
                    ...state, [action.todoListID]: state[action.todoListID].map
                    (t => {
                        if (t.id !== action.taskID) return t
                        else return {...t, isDone: action.isDone}
                    })
                }
            }
            case "REMOVE-TASK": {
                console.log('RemoveTask')
                return {...state,[action.todoID]: state[action.todoID].filter(t => t.id !== action.taskID)}
            }
            case "ADD-TODOLIST" :
                console.log('add-todo')
                console.log(state[action.todoListID])
                const stateCopy = {...state}
                stateCopy[action.todoListID] = [];
                return stateCopy;

            case "ADD-TASK": {

                console.log('AddTask')
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


            default:
                return state;

        }

}



