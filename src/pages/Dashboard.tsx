import React, { useState } from 'react'
import Task from '../component/Task'

type Status = 'completed' | 'pending' | 'deleted'
interface Task {
    id: number,
    title: string,
    status: Status
}
function Dashboard() {

    const [input, setInput] = useState('')
    const [tasks, setTasks] = useState<Task[]>([])
    const [deletedTasks, setDeletedTasks] = useState<Task[]>([])
    const [filter, setFilter] = useState('')
    let idValue = 0

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    }

    function addTask() {
        const task: Task = {
            id: idValue++,
            title: input,
            status: 'pending'
        }
        setTasks((prev: Task[]) => [...prev, task])
        setInput('')
    }

    function handleComplete(id: number) {
        setTasks((prev: Task[]) =>
            prev.map(task =>
                task.id === id ? { ...task, status: 'completed' as const } : task
            )
        )
    }

    function handleDelete(id: number){
        setTasks((prev: Task[]) =>
            prev.filter(task => task.id !== id)
        )
    }

    function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilter(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text"
                    onChange={(e) => handleChange(e)}
                    value={input}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                {tasks.map(task => (
                    <div key={task.id}>
                        <Task task={task} />
                        <button onClick={() => handleComplete(task.id)}>Complete</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                        <button>Edit</button>
                    </div>
                ))}
            </div>
            <select name="filter" id="filter" onChange={(e) => handleSelect(e)}>
                <option value="">All</option>
                <option value="completed">Completed</option>
                <option value="deleted">Deleted</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    )
}

export default Dashboard