import React from 'react';
import PropTypes from 'prop-types';
import * as C from '../constants';
import '../index.css';

const Task = (props) => {
  function onChangeselect(event) {
    props.onChangeStatus( props.task.id, event.target.value)
  }
  function onRemove() {
    props.onRemoveTask( props.task.id)
  }
  
  return(
    <div className="task">
      <div className="task-header">
        <h2>{props.task.title}</h2>
        <select onChange={onChangeselect} value={props.task.status}> 
          {
            C.TASK_STATUSES.map( status => (
              <option key={status} value={status}>{status}</option> 
            ))
          }
        </select>
        <button className="button button-danger" onClick={onRemove}>x</button>
      </div>
      <hr/>
      <div className="task-body">
        {props.task.description}
      </div>
    </div>
  )
}

Task.defaultProps = {
  task: {
    id: 1,
    title: 'emty',
    description: '',
    status: ''
  }
}


Task.propTypes = { 
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }),
  onChangeStatus: PropTypes.func.isRequired
}

export default Task;
