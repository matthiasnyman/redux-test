import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import '../index.css';

const TaskList = props => {

  return (
    <div className='task-list'>
      <div className='task-list-title'><strong>{props.status}</strong></div>

      <div>
        {props.tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onChangeStatus={props.onChangeStatus}
            onRemoveTask={props.onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
};

TaskList.defaultProps = {
  tasks: [],
  status: ''
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  onChangeStatus: PropTypes.func.isRequired
};

export default TaskList;
