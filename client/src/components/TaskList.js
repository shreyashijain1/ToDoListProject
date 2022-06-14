import * as React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TaskCard from './TaskCard';

export default function TaskList(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container item
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
          <Grid item xs={8}>
            <Paper style={{width:"300px", minHeight:"40px", textAlign:"center", fontSize:"24px"}}>
          {props.taskListName}
      </Paper>
          </Grid>
        {props.tasksList.map(task => {
            return(        <Grid item xs={8}>
                <TaskCard taskItem={task} 
                updateComplete={()=>{props.handleCompleteUpdate(task._id)}}
                updateInProgress={()=>{props.handleInProgressUpdate(task._id)}}
                deleteTask={()=>{props.handleDelete(task._id)}}/>
              </Grid>)
        })}
        
        
      </Grid>
    </Box>
  );
}
