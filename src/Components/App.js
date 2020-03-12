import React from "react";
import TaskPage from "./TaskPage";
import "../index.css";
import { connect } from "react-redux";
import { createTask, updateTask, removeTask, getTasks } from "../Actions";
import ReduxBlockUi from 'react-block-ui/redux';


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTasks());
  }

  onChangeStatus = (id, title, description, status) => {
    let action = updateTask(id, title, description, status);
    this.props.dispatch(action);
  };

  onCreateTask = (title, description) => {
    let action = createTask(title, description);
    this.props.dispatch(action);
  };

  onRemoveTask = id => {
    let action = removeTask(id);
    this.props.dispatch(action);
  };

  render() {
    return (
      <div className="main-content">
        <ReduxBlockUi className="loading" tag="div" unblock={["REQUEST_SUCCESS", /fail/i]} onChange={this.props.loading}>
          <TaskPage
            tasks={this.props.tasks}
            onChangeStatus={this.onChangeStatus}
            onCreateTask={this.onCreateTask}
            onRemoveTask={this.onRemoveTask}
          />
        </ReduxBlockUi>
      </div>
    );
  }
}

App.defaultProps = {};

function mapStateToProps(state) {
  return {
    loading: state.loading,
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(App);
