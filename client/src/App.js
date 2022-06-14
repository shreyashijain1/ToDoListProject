import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField, Button, Grid } from "@material-ui/core";
import TaskList from "./components/TaskList";
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        let todoTasks = []
        let inProgressTasks = []
        let completeTasks = []
        tasks.map(tsk => {
            if(tsk.completed){
                completeTasks.push(tsk)
            } else if (tsk.inProgress){
                inProgressTasks.push(tsk)
            } else {
                todoTasks.push(tsk)
            }
        })
        return (
            <div className="App">
                
                <header className="App-header" >TO-DO List Project</header>
                <Paper elevation={3} className="Container">
                <Paper elevation={5} className="Add">
                      <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New TO-DO"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add task
                        </Button>
                    </form>
                    </Paper>
                    <br/>
                    <Grid container spacing={1}>
                        <TaskList taskListName={"To Do"} tasksList={todoTasks}
                         handleCompleteUpdate={this.handleCompleteUpdate} 
                         handleInProgressUpdate={this.handleInProgressUpdate} 
                         handleDelete={this.handleDelete}/>
                        <TaskList taskListName={"In Progress"} tasksList={inProgressTasks}
                         handleCompleteUpdate={this.handleCompleteUpdate} 
                         handleInProgressUpdate={this.handleInProgressUpdate} 
                         handleDelete={this.handleDelete}/>
                        <TaskList taskListName={"Complete"} tasksList={completeTasks}
                         handleCompleteUpdate={this.handleCompleteUpdate} 
                         handleInProgressUpdate={this.handleInProgressUpdate} 
                         handleDelete={this.handleDelete}/>
                      </Grid>
                      </Paper>
                {/* <Paper elevation={3} className="container">
                    <div className="heading">TO-DO</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New TO-DO"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add task
                        </Button>
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                </div>
                                <Button
                                    onClick={() => this.handleDelete(task._id)}
                                    color="secondary"
                                >
                                    delete
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper> */}
            </div>
        );
    }
}

export default App;
