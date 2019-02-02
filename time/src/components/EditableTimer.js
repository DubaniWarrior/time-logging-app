import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends Component {
  state = {
    editFormOpen: false,
  };

  render() {
    const {
      id,
      editFormOpen,
      title,
      project,
      elapsed,
      runningSince,
    } = this.props;

    if (editFormOpen) {
      return <TimerForm id={id} title={title} project={project} />;
    } else {
      return (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
        />
      );
    }
  }
}
