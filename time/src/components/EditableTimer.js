import React, {Component} from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends Component {
  state = {
    editFormOpen: false
  };

  handleEditClick = () => {
    this.toggleForm();
  };

  handleFormClose = () => {
    this.toggleForm();
  };

  handleSubmit = (timer) => {
    this
      .props
      .onFormSubmit(timer);
    this.toggleForm();
  }

  handleDelete = (timer) => {
    this
      .props
      .onFormDelete(timer);
  }

  toggleForm = () => {
    this.setState({
      editFormOpen: !this.state.editFormOpen
    })
  }

  render() {
    const {id, title, project, elapsed, runningSince} = this.props;

    if (this.state.editFormOpen) {
      return <TimerForm
        id={id}
        title={title}
        project={project}
        onFormSubmit={this.handleSubmit}
        handleFormClose={this.handleFormClose}/>;
    } else {
      return (<Timer
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        runningSince={runningSince}
        onEditClick={this.handleEditClick}
        onDeleteClick={this.handleDelete}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick}/>);
    }

  }
}
