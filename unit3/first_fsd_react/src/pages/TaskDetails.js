import React from 'react'
import { useParams } from 'react-router-dom'

const tasks={
    1:{title:"Learn nmap",description:"scan network"},
    2:{title:"Learn curl",description:"test api"},
    3:{title:"Learn burp suite",description:"exploitation"},
}

const TaskDetails = () => {
    const {taskId}=useParams();
    const task = tasks[taskId];
    if(!task)return <h2>Task {taskId} Not Found</h2>
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskDetails
