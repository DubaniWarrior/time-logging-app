import React from 'react';
import {Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import helpers from '../js/helpers';

const Timer = (props) => {
    const {title, elapsed, project} = props;
    const elapsedString = helpers.renderElapsedString(elapsed);
    return (
        <div className='timer'>
            <Col className='pt-2 h-100'>
                <div className="content">
                    <div className="header mt-3">
                        <strong>{title}</strong>
                    </div>
                    <div className="meta text-muted">
                        {project}
                    </div>
                    <div className="description mt-3">
                        <h1>
                            <strong>{elapsedString}</strong>
                        </h1>
                    </div>
                    <div className="extra content my-2">
                        <span className="float-right"><FontAwesomeIcon icon='edit'/></span>
                        <span className="float-right"><FontAwesomeIcon icon='trash-alt'/></span>
                    </div>
                </div>
                <div className='btn-start'>
                    <button className='w-100 btn btn-outline-primary'>Start</button>
                </div>
            </Col>
        </div>
    )
}

export default Timer;
