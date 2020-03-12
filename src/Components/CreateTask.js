import React from 'react';
import PropTypes from 'prop-types';

class CreateTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
  }

  onTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }
  
  onDescriptionChange = event => {
    this.setState({
      description: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onCreateTask(this.state.title, this.state.description);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      title: '',
      description: ''
    })
  }
  //onChange

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onTitleChange} value={this.state.title}  />
        <input type="text" onChange={this.onDescriptionChange} value={this.state.description} />
        <button type="submit" className="button"> Save </button>
      </form>
    )
  }
}

CreateTask.propTypes = {
  onCreateTask: PropTypes.func.isRequired
}

export default CreateTask;
