import React from "react";
import TaskPage from "./TaskPage";
import '../index.css';
import { connect } from "react-redux";
import { createTask, changStatusTask, removeTask } from '../Actions';


class App extends React.Component {

  onChangeStatus = (id, status) => {
    let action = changStatusTask(id, status);
    this.props.dispatch(action);
  };
  
  onCreateTask = (title, description) => {
    let action = createTask(title, description);
    this.props.dispatch(action);
  };

  onRemoveTask = (id) => {
    console.log('id', id);
    let action = removeTask(id);
    this.props.dispatch(action);

  };


  render() {
    return (
      <div className="main-content">
        <TaskPage
          tasks={this.props.tasks}
          onChangeStatus={this.onChangeStatus}
          onCreateTask={this.onCreateTask}
          onRemoveTask={this.onRemoveTask}
        />
      </div>
    );
  }
}


App.defaultProps = {

}

function mapStateToProps(state){
  return{
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(App);

