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


    return <div>213</div>







}

export default SupperInput;