import React, { useState } from 'react'
import Task from '../component/Task'

type Status = 'completed' | 'pending' | 'deleted'
interface Task{
    id: number,
    title: string,
    status: Status
}
function Dashboard() {

    const[input, setInput] = useState('')
    const [tasks, setTasks] = useState<Task[]>([])
    const [filter, setFiletr] = useState('')
    let idValue = 0

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleselect(e){
        setFiletr(e.target.value)
    }

    function addTask(){
        const task: Task = {
            id: idValue++,
            title: input,
            status: 'pending'
        }
        setTasks((prev: Task[]) => [...prev, task])
    }

  return (
    <div>
        <div>
            <input type="text"
                onChange={(e) => handleChange(e)}
            />
            <button onClick={addTask}>Add</button>
        </div>
        <div>
            {tasks.map(task => {
                return <Task key={task.id} task = { task}/>
            })}
        </div>
        <select name="filter" id="filter" onChange={(e) => handleselect(e)}>
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="deleted">Deleted</option>
            <option value="pending">Pending</option>
        </select>
    </div>
  )
}

export default Dashboard