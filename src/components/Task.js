import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
      <h3>{task.text}</h3>
      <p>{task.day} <FaTimes 
      style={{color:'red', margin:'20px', cursor:'pointer'}}
      onClick={()=>onDelete(task.id)}
      /></p>
    </div>
  )
}

export default Task
