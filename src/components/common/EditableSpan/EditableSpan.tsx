import React, {ChangeEvent, KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import classes from './EditableSpan.module.scss';
import SupperInput from "../SupperInput/SupperInput";


type EditableSpanPropsType = {
    title: string
    changeTaskTitle: (newTitle: string) => void
}

const EditableSpan: React.FC<EditableSpanPropsType> = ({changeTaskTitle, title}) => {

    const [name, setName] = useState<string>(title)
    const [mode, setMode] = useState<boolean>(false);


    const changeTitle = () => {
        changeTaskTitle(name);
        setMode(false)
    }


    return (mode ? <SupperInput onBlur={changeTitle} onChangeText={setName} value={name}/> :
        <span onDoubleClick={() => {
            setMode(true)
        }}>{title}</span>)


}

export default EditableSpan;