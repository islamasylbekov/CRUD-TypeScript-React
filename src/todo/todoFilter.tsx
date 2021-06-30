import React, {ChangeEvent} from 'react';
import {Box, Grid, IconButton, Paper, TextField} from "@material-ui/core";
import {Search} from "@material-ui/icons";

type PropTypes = {
    find:(text:string)=>void
}

const TodoFilter = (props:PropTypes) => {



    function handleChangeInput(e:ChangeEvent<HTMLInputElement>){
        props.find(e.target.value)
    }

    return (
        <Box>
            <Paper>
                <Box p={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={11}>
                            <TextField variant={"outlined"}
                                       onChange={handleChangeInput}
                                       fullWidth={true}
                                       label="Search"/>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton><Search/></IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default TodoFilter;