import React, {Component} from 'react'
import TimerForm from './TimerForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default class ToggleableTimerForm extends Component {
    state = {
        isOpen: false
    };

    handleFormOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        if (this.state.isOpen) {
            return (<TimerForm/>);
        } else {
            return (
                <div className="content text-center">
                    <button onClick={this.handleFormOpen} className='btn btn-plus btn-plus'><FontAwesomeIcon icon={faPlus}/></button>
                </div>
            )
        }
    }
}
