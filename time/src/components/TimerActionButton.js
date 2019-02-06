import React from 'react'

export default(props) => {
    if (props.timerIsRunning) {
        return (
            <div>
                <div className="btn-start">
                    <button className="w-100 btn btn-outline-primary" onClick={props.onStopClick}>Stop</button>
                </div>
            </div>
        )

    } else {
        return (
            <div>
                <div className="btn-start">
                    <button className="w-100 btn btn-outline-danger" onClick={props.onStartClick}>Start</button>
                </div>
            </div>
        )
    }
}
