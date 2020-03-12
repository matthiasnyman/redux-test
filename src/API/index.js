import axios from "axios";

const url = "http://localhost:4000";


const client = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const fetchTasks = () => {

  return client.get('/tasks');
};

export const createTask = (params) => {

  return client.post('/tasks', params);
  

};

export const editTask = (id, params) => {

  return client.put('/tasks/' + id, params);

};

export const deleteTask = ( id ) => {

  return client.delete('/tasks/' + id);

};
