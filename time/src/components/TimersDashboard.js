import React, {Component} from 'react';
import {Col} from 'reactstrap';
import EditableTimerList from './EditableTimerList'
import ToggleableTimerFrom from './ToggleableTimerFrom';

class TimersDashboard extends Component {
    render() {
        return (
            <div>
                <div className='d-flex flex-row justify-content-center'>
                    <Col md='3'>
                        <EditableTimerList/>
                        <ToggleableTimerFrom isOpen={true}/>
                    </Col>

                </div>
            </div>
        );
    }
}

export default TimersDashboard;