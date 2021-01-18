import React, {ChangeEvent, KeyboardEvent,DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from './SupperInput.module.scss';


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputPropsType = DefaultInputPropsType & {
    onChangeText?:(value: string) => void
}

const SupperInput:React.FC<SuperInputPropsType> = ({
    onChangeText,type,onChange,
    onKeyPress, ...restProps
                                                    }) => {


    const onChangeCallback = (e:ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }


    return <input onChange={onChangeCallback} {...restProps} type="text"/>







}

export default SupperInput;