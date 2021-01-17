export type FilterValuesType = 'all' | 'completed' | 'active'


export type TodoListType = {

    filter: FilterValuesType
    id: string
    title: string
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TaskStateType = {
    [key: string]: Array<TaskType>
}


export type RemoveTaskActionType = {
    type: "REMOVE-TASK"
    todoID: string
    taskID: string
}

export type AddTodoListActionType = {
    type: "ADD-TODOLIST"
    todoListID: string
    title: string
}

export type ChangeTodoListTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE",
    todoListID: string
    title: string
}

export type AddTaskActionType = {
    type: "ADD-TASK"
    title: string
    todoListID: string

}

export type ChangeTaskStatusActionType = {
    type: "CHANGE-TASK-STATUS"
    taskID: string
    todoListID: string
    isDone: boolean
}

export type ActionsType =
    RemoveTaskActionType
    | AddTodoListActionType
    | ChangeTodoListTitleActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType