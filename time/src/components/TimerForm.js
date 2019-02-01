import React from 'react';
import {Col} from 'reactstrap';

const TimerForm = (props) => {
    const {title, project} = props;

    const submitText = title
        ? 'Update'
        : 'Create';
    return (
        <Col>

            <div className="content">
                <form>
                    <div className="form-group">
                        <label htmlFor="title" className='text-left'>Title</label>
                        <input
                            type="text"
                            className='form-control form-control-sm'
                            defaultValue={title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Project</label>
                        <input
                            type="text"
                            className='form-control form-control-sm'
                            defaultValue={project}/>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary">{submitText}</button>
                        <button className="btn btn-outline-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </Col>
    )
}

export default TimerForm;
