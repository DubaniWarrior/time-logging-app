import React, {Component} from 'react';
import {Col} from 'reactstrap';

class TimerForm extends Component {

  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value})
  };

  handleProjectChange = (e) => {
    this.setState({project: e.target.value});
  }

  handleSubmit = () => {
    this
      .props
      .onFormSubmit({id: this.props.id, title: this.state.title, project: this.state.project})
  }

  render() {
    const {title, project} = this.state;
    const {id, handleFormClose} = this.props

    const submitText = id
      ? 'Update'
      : 'Create';
    return (
      <Col className="timer-form">
        <div className="content">
          <form>
            <div className="form-group text-left">
              <label htmlFor="title">
                <strong>Title</strong>
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                value={title}
                onChange={this.handleTitleChange}/>
            </div>
            <div className="form-group text-left">
              <label htmlFor="title">
                <strong>Project</strong>
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                value={project}
                onChange={this.handleProjectChange}/>
            </div>
            <div>
              <button className="btn btn-outline-primary mx-3" onClick={this.handleSubmit}>
                {submitText}
              </button>
              <button className="btn btn-outline-danger" onClick={handleFormClose}>Cancel</button>
            </div>
          </form>
        </div>
      </Col>
    );
  }
}

export default TimerForm;
