import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
    return axios.get(apiUrl+"/fetchTasks");
}

export function addTask(task) {
    return axios.post(apiUrl+"/addTask", task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/updateTask/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/removeTask/" + id);
}
