import React, {ChangeEvent, useState} from 'react';
import classes from './TodoInput.module.scss';
import SupperInput from "../../common/SupperInput/SupperInput";

type TodoInputPropsType = {
    addItem: (title: string) => void
}

export const TodoInput:React.FC<TodoInputPropsType> = ({addItem}) => {


    const [title, setTitle] = useState<string>('');

    const addItemCallback = () => {
          if(title.trim() !== "") {
              addItem(title)
              setTitle("")
          }

    }



    return <div className={classes.todoInput}>

        <SupperInput onChangeText={setTitle} value={title}  />
        <button onClick={addItemCallback}>add</button>

    </div>

}