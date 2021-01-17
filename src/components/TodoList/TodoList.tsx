import React, {ChangeEvent, useState} from 'react';
import classes from './TodoList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {TaskStateType, TaskType} from "../../types/types";
import {addTaskAC} from "../../redux/tasks-reducer";
import {TodoInput} from "./TodoInput/TodoInput";
import {TodoTask} from "./TodoTask/TodoTask";

type TodoListPropsType = {
    title: string
    todoID: string
    addTask: (title: string,todoListID: string) => void
    data: Array<TaskType>
    removeTask:(taskID: string,todoListID: string) => void
    changeTaskStatus :(taskID: string, todoListID:string, isDone: boolean) => void
}

export const TodoList:React.FC<TodoListPropsType> = ({changeTaskStatus,removeTask,data,addTask,todoID,title}) => {





    const addTaskCallback = (title: string) => {
         addTask(title,todoID)
    }



    return <div className={classes.todoList}>
            <div>{title}</div>
            <TodoInput addItem={addTaskCallback}/>
        {data.map(el => {
            return <TodoTask
                key={el.id}
                task={el}
                removeTask={removeTask}
                todoListID={todoID}
                changeTaskStatus={changeTaskStatus}

            />
        })}
    </div>

}