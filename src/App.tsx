import React from 'react';
import './App.css';
import Header from "./header/header";
import Todo from "./todo/todo";
import {Box, createMuiTheme} from "@material-ui/core";
import {lightGreen, teal} from "@material-ui/core/colors";
import {ThemeProvider} from '@material-ui/core/styles';
import Admin from "./admin/admin";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[500],
        },
        secondary: {
            main: '#ff1400',
        },
        success:{
            main: lightGreen["A400"],
        },

    },
})


const App = () =>{
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header>
                <Box p={10}>
                    <Switch>
                        <Route path="/" exact component={Todo} />
                        <Route path="/admin" component={Admin} />
                    </Switch>
                </Box>
                </Header>
            </BrowserRouter>
        </ThemeProvider>
      );
}

export default App;
