import * as C from '../constants';

let _id = 3;

export function uniqueId() {
  return _id++;
}

export function createTask(title, description) {
  return{ 
    type: C.ACTION_CREATE_TASK,
    payload: {
      id: uniqueId(),
      title: title,
      description: description,
      status: C.STATUS_UNSTARTED
    }
  };
}


export function changStatusTask(id, status) {
  return{ 
    type: C.ACTION_SET_TASK_STATUS,
    payload: {
      id: id,
      status: status
    }
  };

}
export function removeTask(id) {
  return{ 
    type: C.ACTION_REMOVE_TASK,
    payload: {
      id: id,
    }
  };

}