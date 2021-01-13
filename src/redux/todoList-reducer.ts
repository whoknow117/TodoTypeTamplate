import {v1} from "uuid";
import {ActionsType, TodoListType} from "../types/types";


let todoListID1:string = v1();
let todoListID2:string = v1();


let initialState: Array<TodoListType>  =  [
    {id: todoListID1, title: 'What to learn?', filter: 'all'},
    {id: todoListID2, title: 'What to eat?', filter: 'all'},
]


const todoListReducer = (state:Array<TodoListType> = initialState , action:ActionsType) => {

}



export default todoListReducer;