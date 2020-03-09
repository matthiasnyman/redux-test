import React from "react";
import PropTypes from "prop-types";
import CreateTask from './CreateTask'
import TaskList from "./TaskList";
import * as C from "../constants";
import "../index.css";

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    };
  }

  onCreateTask = (title, description) => {
    this.props.onCreateTask(title, description);
    this.setState({
      create: false
    });
  };

  onToggleForm = () => {
    this.setState({
      create: !this.state.create
    });
  };

  taskList() {
    const { tasks } = this.props;

    return C.TASK_STATUSES.map(status => {
      const filterStatus = tasks.filter(task => task.status === status);

      return (
        <TaskList
          key={status}
          tasks={filterStatus}
          status={status}
          onChangeStatus={this.props.onChangeStatus}
          onRemoveTask={this.props.onRemoveTask}
        />
      );
    });
  }

  render() {
    const form = this.state.create ? <CreateTask onCreateTask={this.onCreateTask} /> : null;

    return (
      <div className="task-lists">
        <div className="task-list">
          <button className="button button-info" onClick={this.onToggleForm}>
            {" "}
            new task{" "}
          </button>
          {form}
        </div>
        <br />
        <div className="task-lists">{this.taskList()}</div>
      </div>
    );
  }
}

TaskPage.defaultProps = {
  tasks: []
};

TaskPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onCreateTask: PropTypes.func.isRequired
};

export default TaskPage;
