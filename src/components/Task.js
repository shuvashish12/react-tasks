import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div  className={`task ${task.reminder && 'reminder'}`} 
    onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text}</h3>
      <p>{task.day} <FaTimes 
      style={{color:'red', margin:'20px', cursor:'pointer'}}
      onClick={()=>onDelete(task.id)}
      /></p>
    </div>
  )
}

export default Task
