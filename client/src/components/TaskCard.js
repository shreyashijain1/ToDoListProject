import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TaskCard(props) {
  return (
    <Card key={props.taskItem._id} variant="contained" style={{width: '300px'}}>
      <CardContent>
        <Typography style={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="h5" component="div">
          {props.taskItem.task}
        </Typography>
      </CardContent>
      <CardActions>
    {!props.taskItem.completed && props.taskItem.inProgress && <Button size="small" variant="contained" onClick={props.updateComplete}>Complete</Button>}
    {!props.taskItem.completed && !props.taskItem.inProgress && <Button size="small" variant="contained" onClick={props.updateInProgress}>In Progress</Button>}
    <IconButton aria-label="delete" color="primary" onClick={props.deleteTask}>
        <DeleteIcon />
    </IconButton>
      </CardActions>
    </Card>
  );
}
