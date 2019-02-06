import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import helpers from '../js/helpers';
import TimerActionButton from './TimerActionButton';

class Timer extends Component {

  handleTrashClick = () => {
    this
      .props
      .onDeleteClick(this.props.id);
  }

  componentDidMount() {
    this.forUpdateInterval = setInterval(() => {
      this.forceUpdate()
    }, 50);
  }

  componentWillUnmount = () => {
    clearInterval(this.forceUpdateInterval);
  }

  handleStartClick = () => {
    this
      .props
      .onStartClick(this.props.id);
  }
  handleStopClick = () => {
    this
      .props
      .onStopClick(this.props.id);
  }
  render() {
    const {title, elapsed, project, onEditClick, runningSince} = this.props;

    const elapsedString = helpers.renderElapsedString(elapsed, runningSince);

    return (
      <div className="timer">
        <Col className="pt-2 h-100">
          <div className="content">
            <div className="header mt-3">
              <strong>{title}</strong>
            </div>
            <div className="meta text-muted">{project}</div>
            <div className="description mt-3">
              <h1>
                <strong>{elapsedString}</strong>
              </h1>
            </div>
            <div className="extra content my-2">
              <span className="float-right ml-3" onClick={onEditClick}>
                <FontAwesomeIcon icon={faEdit}/>
              </span>
              <span className="float-right" onClick={this.handleTrashClick}>
                <FontAwesomeIcon icon={faTrashAlt}/>
              </span>
            </div>
          </div>
          <TimerActionButton
            timerIsRunning={!!this.props.runningSince}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}/>
        </Col>
      </div>
    );

  }

};

export default Timer;
