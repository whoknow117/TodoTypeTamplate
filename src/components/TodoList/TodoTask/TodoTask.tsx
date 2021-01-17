import React, {ChangeEvent} from 'react';
import classes from './TodoTask.module.scss';
import {TaskType} from "../../../types/types";

type TodoTaskPropsType = {
    task: TaskType
    removeTask:(taskID:string,todoListID: string) => void
    todoListID: string
    changeTaskStatus :(taskID: string, todoListID:string, isDone: boolean) => void
}

export const TodoTask:React.FC<TodoTaskPropsType> = ({changeTaskStatus,removeTask, todoListID, task}) => {

    const deleteCallBack = () => {
        removeTask(task.id,todoListID)
    }
    const changeCallback = (e:ChangeEvent<HTMLInputElement>) => {changeTaskStatus(task.id,todoListID,e.currentTarget.checked)}


    return <div>
        <input checked={task.isDone} onChange={changeCallback}  type="checkbox"/>
        <div>{task.title}</div>
        <button onClick={deleteCallBack}>X</button>
    </div>

}