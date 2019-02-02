import React from 'react';
import {Col} from 'reactstrap';

const TimerForm = (props) => {
    const {title, project} = props;

    const submitText = title
        ? 'Update'
        : 'Create';
    return (
        <Col className='timer-form'>

            <div className="content">
                <form>
                    <div className="form-group text-left">
                        <label htmlFor="title">
                            <strong>Title</strong>
                        </label>
                        <input
                            type="text"
                            className='form-control form-control-lg'
                            defaultValue={title}/>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="title">
                            <strong>Project</strong>
                        </label>
                        <input
                            type="text"
                            className='form-control form-control-lg'
                            defaultValue={project}/>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary mx-3">{submitText}</button>
                        <button className="btn btn-outline-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </Col>
    )
}

export default TimerForm;
