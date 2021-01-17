import React, {ChangeEvent, useState} from 'react';
import classes from './TodoInput.module.scss';

type TodoInputPropsType = {
    addItem: (title: string) => void
}

export const TodoInput:React.FC<TodoInputPropsType> = ({addItem}) => {


    const [title, setTitle] = useState<string>('');

    const addItemCallback = () => {
        addItem(title)
    }

    const changeTitle = (e:ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget && e.currentTarget.value)}

    return <div className={classes.todoInput}>

        <input value={title} onChange={changeTitle} type="text"/>
        <button onClick={addItemCallback}>add</button>

    </div>

}