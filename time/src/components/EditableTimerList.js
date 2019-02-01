import React from 'react'
import EditableTimer from './EditableTimer';

const EditableTimerList = () => {
    return (
        <div>
            <EditableTimer
                title='Learn React'
                project='Nuage progress'
                elapsed='8986300'
                runningSince={null}
                editFormOpen={false}/>
            <EditableTimer
                title='Learn Classic Chess'
                project='Grand Master'
                elapsed='7362899'
                runningSince={null}
                editFormOpen={true}/>

        </div>
    )
}

export default EditableTimerList;
