import React, {ChangeEvent} from 'react';
import classes from './TodoTask.module.scss';
import {TaskType} from "../../../types/types";
import EditableSpan from "../../common/EditableSpan/EditableSpan";

type TodoTaskPropsType = {
    task: TaskType
    removeTask:(taskID:string,todoListID: string) => void
    todoID: string
    taskID: string
    changeTaskStatus :(taskID: string, todoListID:string, isDone: boolean) => void
    changeTaskTitle: (taskID: string, todoListID: string, title: string) => void
}

export const TodoTask:React.FC<TodoTaskPropsType> = ({changeTaskTitle,taskID,changeTaskStatus,removeTask, todoID, task}) => {

    const deleteCallBack = () => {
        removeTask(taskID,todoID)
    }
    const changeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(taskID,todoID,e.currentTarget && e.currentTarget.checked)
    }

    const changeTaskTitleCallback = (newTitle: string) => {
        changeTaskTitle(taskID,todoID, newTitle);
    }

    return <div className={classes.affairs}>
        <input checked={task.isDone} onChange={changeStatus}  type={'checkbox'}/>
        <EditableSpan changeTaskTitle={changeTaskTitleCallback} title={task.title}/>
        <button onClick={deleteCallBack}>X</button>
    </div>

}