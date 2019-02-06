import React from 'react';
import EditableTimer from './EditableTimer';

const EditableTimerList = props => {
  const timers = props
    .timers
    .map(timer => (
      <div>
        <EditableTimer
          key={timer.id}
          id={timer.id}
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
          onFormSubmit={props.onFormSubmit}
          onFormDelete={props.onFormDelete}
          onStartClick={props.onStartClick}
          onStopClick={props.onStopClick}/>
      </div>
    ));
  return <div id="timers">{timers}</div>;
};

export default EditableTimerList;
