import * as C from '../constants';
import { uniqueId } from '../Actions';

const initialState = [
  {
    id: uniqueId(),
    title: "Learn Redux",
    description: "The store, actions and more",
    status: "In Progress"
  },
  {
    id: uniqueId(),
    title: "Peace on Earth",
    description: "No big deal",
    status: "Unstarted"
  }
];


export default function tasks(state={tasks: initialState}, action){

  if(action.type === C.ACTION_CREATE_TASK){
    return {tasks: state.tasks.concat(action.payload)};
  }

  if(action.type === C.ACTION_REMOVE_TASK){

    let removedTask = state.tasks.filter((item) => {
      if(item.id === action.payload.id) {
        return false
      }else{ 
        return true
      }
  
    });
    return { tasks: removedTask };

  }

  if(action.type === C.ACTION_SET_TASK_STATUS){

    let newTasks = state.tasks.map((item) => {
      if(item.id !== action.payload.id) {
        return item
      }
    
      return {
        ...item,
        status: action.payload.status
      }
    });
    return { tasks: newTasks };
  }

  return state;
}
