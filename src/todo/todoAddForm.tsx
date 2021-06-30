import React, {useRef} from 'react';
import {Button, TableCell, TableRow, TextField} from "@material-ui/core";
import {Save} from "@material-ui/icons";

type PropType = {
    func: (title: string) => void
}

const TodoAddForm  = ({func}: PropType) =>  {

    let refInput  = useRef<HTMLInputElement>(null);

    function todoSend(){
        if (refInput.current!==null) {
            func(refInput.current.value);
            refInput.current.value = ""
        }
    }

    return (
                <TableRow>
                    <TableCell colSpan={2}>
                        <TextField fullWidth size={'small'} inputRef={refInput}/>
                    </TableCell>
                    <TableCell>
                        <Button onClick={todoSend} variant={'outlined'} color={'primary'}><Save/> Сохранить</Button>
                    </TableCell>
                </TableRow>

    );
}

export {TodoAddForm};