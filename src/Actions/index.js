import * as C from '../constants';
import * as api from '../API';

export const getTasks = () => {
  return dispatch => {
    api.fetchTasks()
      .then(response => {
        dispatch(getTasksSuccess(response.data))
      })

  }
}

export function getTasksSuccess(tasks) {
  return{ 
    type: C.ACTION_FETCH_TASKS_OK,
    payload: { tasks }
  };
}

export const getTasksFailure = error => {
  return{ 
    type: C.ACTION_TASK_ERROR,
    payload: error
  };
}


export function createTask( title, description, status = C.STATUS_UNSTARTED) {
  return dispatch => {
    dispatch({ type: C.ACTION_CREATE_TASK });
    const task = { title, description, status };

    api.createTask(task)
      .then(response => {
        setTimeout(function(){
          dispatch(createTaskSuccses(response.data))
        }, 2000 )
      })

  }
}

export const createTaskSuccses = (task) => {
  return{ 
    type: C.ACTION_CREATE_TASK_OK,
    payload: { task }
  };
}

export function updateTask( id, title, description, status ) {
  return dispatch => {
    dispatch({ type: C.ACTION_CREATE_TASK });

    let params = { id, title, description, status };


    api.editTask(id, params)
      .then(response => {
        dispatch(updateTaskSuccses(response.data))
      })

  }
}

export const updateTaskSuccses = (task) => {
  return{ 
    type: C.ACTION_SET_TASK_OK,
    payload: { task }
  };
}


export function removeTask(id) {
  return dispatch => {
    //dispatch({ type: C.ACTION_REMOVE_TASK });

    api.deleteTask(id)
      .then(() => {
        dispatch(removeTaskSuccses(id))
      })

  }

}
export function removeTaskSuccses(id) {
  return{ 
    type: C.ACTION_REMOVE_TASK_OK,
    payload: id
  };

}