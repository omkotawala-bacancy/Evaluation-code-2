import React from 'react'

function Task({ task }) {

    function handleComplete(){

    }
    return (
        <div style={{border: "1px solid black"}}>
            <p>{task.status}</p>
            <h2>{task.title}</h2>
            <button onClick={handleComplete}>Complete</button>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Task