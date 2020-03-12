import * as C from "../constants";

const initialState = {
  loading: false,
  error: null,
  tasks: []
};

export default function tasks(state = { initialState }, action) {
  if (action.type === C.ACTION_FETCH_TASKS) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === C.ACTION_FETCH_TASKS_OK) {
    return {
      loading: false,
      error: "",
      tasks: action.payload.tasks
    };
  }

  if (action.type === C.ACTION_TASK_ERROR) {
    return {
      loading: false,
      error: action.payload,
      tasks: []
    };
  }

  if (action.type === C.ACTION_CREATE_TASK) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === C.ACTION_CREATE_TASK_OK) {
    return {
      loading: false,
      error: null,
      tasks: state.tasks.concat(action.payload.task)
    };
  }

  if (action.type === C.ACTION_SET_TASK_STATUS) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === C.ACTION_SET_TASK_OK) {
    let tasks = state.tasks.map(task => {
      if (task.id === action.payload.task.id) {
        return action.payload.task;
      }

      return task;
    });
    return {
      tasks,
      loading: false,
      error: null
    };
  }

  if (action.type === C.ACTION_REMOVE_TASK) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === C.ACTION_REMOVE_TASK_OK) {
    let tasks = state.tasks.filter(task => task.id !== action.payload)

    return {
      tasks: tasks,
      loading: false,
      error: null
    };
  }

  return state;
}
