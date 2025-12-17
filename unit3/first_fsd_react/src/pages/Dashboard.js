import React from 'react'
import { Link } from 'react-router-dom'

const tasks=[
    {id:1,title:'Learn nmap'},
    {id:2,title:'Learn curl'},
    {id:3,title:'Learn burp suite'}
]
const Dashboard = () => {
  return (
    <>
    <ul>
      {tasks.map((task)=>(
        <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}

export default Dashboard
