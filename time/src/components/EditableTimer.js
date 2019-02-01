import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = (props) => {
    const {editFromOpen, title, project, elapsed, runningSince} = props;
    if (editFromOpen) {
        return (<TimerForm title={title} project={project}/>)
    } else {
        return (<Timer
            title={title}
            project={project}
            elapsed={elapsed}
            runningSince={runningSince}/>);

    }
}

export default EditableTimer;
