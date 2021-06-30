import React, {useState} from 'react';
import {TodoAddForm} from "./todoAddForm";
import TodoType from "../types/TodoType";
import {TodoList} from "./todoList";
import {
    Box,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import TodoFilter from "./todoFilter";

const useStyles = makeStyles((theme)=>({
    table:{
        position: "relative",
        color:theme.palette.common.white,
        marginTop:theme.spacing(1),
    }
}))

let Todo = () =>{

    let classes = useStyles()

    let [todo,setTodo] = useState<TodoType[]>();


    let addTodo = (text:string) : void =>{
        let localTodo : TodoType = {title:text,visibility:true, createdAt:new Date(),id:Date.now()}
        if (text === '')
            return;
        if (todo !== undefined){
            setTodo([...todo,localTodo])
        }else {
            setTodo([localTodo])
        }

    }

    let removeTodo = (id:Number) : void=> {
        setTodo(todo?.filter( x =>  x.id !== id))
    }
    let update = (id:Number, text: string) : void => {
        todo?.forEach(x => {
                if (x.id === id) {
                    x.title = text
                }
            }
        )
        setTodo(todo)
    }



    let find = (text:string):void =>{
        if (text!=="") {
            setTodo( todo?.map(x => {
                 x.visibility = x.title.includes(text)
                return x
            }))

        }else {
            setTodo(todo?.map(x => {
                x.visibility = true
                return x
            }))
        }
    }
    let list = todo?.map(x => {
        if (x.visibility)
        return (
            <TodoList remove={removeTodo} update={update}  todo={x} key={x.id+""}/>
        )
    })


    return (
        <Box >
            <TodoFilter find={find}/>
            <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            <TableCell>Названия</TableCell>
                            <TableCell>Время создания</TableCell>
                            <TableCell>Действия</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list}
                        <TodoAddForm func={ addTodo}/>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Todo
