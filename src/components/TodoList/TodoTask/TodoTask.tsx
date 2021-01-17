import React, {ChangeEvent} from 'react';
import classes from './TodoTask.module.scss';
import {TaskType} from "../../../types/types";

type TodoTaskPropsType = {
    task: TaskType
    removeTask:(taskID:string,todoListID: string) => void
    todoID: string
    taskID: string
    changeTaskStatus :(taskID: string, todoListID:string, isDone: boolean) => void
}

export const TodoTask:React.FC<TodoTaskPropsType> = ({taskID,changeTaskStatus,removeTask, todoID, task}) => {

    const deleteCallBack = () => {
        removeTask(taskID,todoID)
    }
    const changeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(taskID,todoID,e.currentTarget && e.currentTarget.checked)
    }


    return <div className={classes.affairs}>
        <input checked={task.isDone} onChange={changeStatus}  type={'checkbox'}/>
        <div>{task.title}</div>
        <button onClick={deleteCallBack}>X</button>
    </div>

}