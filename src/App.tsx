import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {AppRootStateType} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {TaskStateType, TodoListType} from "./types/types";
import {ChangeTodoListTitleAC, AddTodoListAC} from "./redux/todoList-reducer";
import {TodoInput} from "./components/TodoList/TodoInput/TodoInput";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./redux/tasks-reducer";



function App( ) {

    const dispatch = useDispatch();





    let todoLists = useSelector<AppRootStateType,Array<TodoListType>>(state => state.todoLists)


    let tasks = useSelector<AppRootStateType,TaskStateType>(state => state.tasks)



    const addTodoList = (title: string) => {
        dispatch(AddTodoListAC(title))
    }

    const addTask = (title: string, todoListID:string) => {
        dispatch(addTaskAC(title,todoListID))
    }

    const removeTask = (taskID: string,todoListID: string) => {
        dispatch(removeTaskAC(todoListID,taskID))
    }


    const changeTaskTitle = (taskID: string, todoListID: string, title: string) => {
        dispatch(changeTaskTitleAC(taskID,todoListID,title))
    }

    const changeTaskStatus = (taskID: string, todoListID:string, isDone: boolean) => {
        dispatch(changeTaskStatusAC(taskID,todoListID,isDone))
    }

  return (
    <div className="App">
        <TodoInput addItem={addTodoList}/>
        {todoLists.map(tl => {

            let data = tasks[tl.id]
            return (
               <div  key={tl.id} className="todoList">

                   <TodoList
                       addTask={addTask}
                       todoID={tl.id}
                       title={tl.title}
                       data={data}
                       removeTask={removeTask}
                       changeTaskStatus={changeTaskStatus}
                       changeTaskTitle={changeTaskTitle}
                   />

               </div>

            )
        })}
    </div>
  );
}

export default App;
