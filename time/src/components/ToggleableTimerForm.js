import React from 'react'
import TimerForm from './TimerForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ToggleableTimerForm = (props) => {
    if (props.isOpen) {
        return (<TimerForm/>);
    } else {
        return (
            <div className="content text-center">
                <button><FontAwesomeIcon icon='plus'/></button>
            </div>
        )
    }

}

export default ToggleableTimerForm;
