import {v1} from "uuid";
import {ActionsType, AddTodoListActionType, ChangeTodoListTitleActionType, TodoListType} from "../types/types";






let initialState: Array<TodoListType>  =  []


export const todoListReducer = (state = initialState , action:ActionsType):Array<TodoListType> => {
    switch (action.type) {
        case "ADD-TODOLIST": {

            const newTodoList: TodoListType ={
                id: action.todoListID,
                title: action.title,
                filter: 'all'
            }
            console.log('asd')
            return [...state, newTodoList]
        }
        case "CHANGE-TODOLIST-TITLE": {
            const sortTodo = state.find( el => el.id === action.todoListID)
            if(sortTodo) {
                sortTodo.title = action.title

            }
            return [...state]
        }


        default: {
            return state;
        }


    }
}


export const AddTodoListAC = (title: string):AddTodoListActionType => {
    return {
        type: "ADD-TODOLIST",
        todoListID: v1(),
        title: title
    }
}

export const ChangeTodoListTitleAC = (title: string, todoListID: string):ChangeTodoListTitleActionType => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        todoListID: v1(),
        title: title
    }
}


