import React, {ChangeEvent, useState} from 'react';
import TodoType from "../types/TodoType";
import {Button, TableCell, TableRow, TextField} from "@material-ui/core";
import {Cancel, CloudUpload, Delete, Update} from "@material-ui/icons";

type Propstype= {
    todo:TodoType,
    remove:(id:Number) =>void,
    update:(id:Number,text: string) => void,
}

const TodoList = ( {todo,remove,update}:Propstype) => {

    let [updateState,setUpdateState] = useState<boolean>(true);
    let [text, setText] = useState<string>(todo.title)

    let tsx:JSX.Element;

    function handleBtnUpdateClick(){
        update(todo.id,text)
        setUpdateState(true)
    }

    function handleInputChange(e:ChangeEvent<HTMLInputElement>){
        setText(e.target.value)
    }

    function cancel(){
        setUpdateState(true)
        setText(todo.title)
    }

    if(updateState){
        tsx = (
                <>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell>{todo.createdAt.getHours()}:{todo.createdAt.getMinutes()}</TableCell>
                    <TableCell>
                        <Button variant={'outlined'} onClick={()=>setUpdateState(false)}><Update/>Обновить</Button>
                        <Button variant={'outlined'} color={'secondary'} onClick={()=>remove(todo.id)}><Delete/>Удплить</Button>
                    </TableCell>
                </>
        )
    }else {
        tsx = (
            <>
                <TableCell colSpan={2}><TextField value={text} onChange={handleInputChange} fullWidth size={'small'}/></TableCell>
                <TableCell>
                    <Button variant={'outlined'} color={"primary"} onClick={handleBtnUpdateClick}><CloudUpload/>Подтвердить</Button>
                    <Button variant={'outlined'} color={'secondary'} onClick={cancel}><Cancel/>Отмена</Button>
                </TableCell>
            </>
        )
    }

    return (
        <TableRow>
            {tsx}
        </TableRow>
    );
};

export {TodoList};