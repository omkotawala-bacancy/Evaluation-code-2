import React from 'react'

function Task({ task }) {

    
    return (
        <div style={{border: "1px solid black"}}>
            <p>{task.status}</p>
            <h2>{task.title}</h2>
            
        </div>
    )
}

export default Task