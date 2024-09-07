import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import { useState } from 'react';
import Tasks from './components/Tasks';
import Addtask from './components/Addtask';

function App() {

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState( [
      {
          "id": 1,
          "text": "Doctors Appointment",
          "day": "Feb 5th at 2:30pm",
          "reminder": true
        },
        {
          "id": 2,
          "text": "Meeting at School",
          "day": "Feb 6th at 1:30pm",
          "reminder": true
        },
        {
          "id": 3,
          "text": "Doctors Appointment Not",
          "day": "Feb 5th at 2:30pm",
          "reminder": false
        },
        {
          "id": 4,
          "text": "Meeting at School Not",
          "day": "Feb 6th at 1:30pm",
          "reminder": false
        }
  
  ]
  )
  const click = ()=>{
    //alert("Hi how are you")
    setCount(count +1)
    setShow(!show)
  }
  // const dontClick = ()=>{
  //   //alert("Hi how are you")
  //   setCount(count - 1)
  // }
  const addTask = (task)=>{
    const id= Math.floor(Math.random() *10000)+1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);

  }
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  const toggleReminder = (id)=> {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header title='Shuvashish' gem='Debnath' />
      <Button color={show?'green':'red'} title="Click me" onClick={click} count={count} />
      {show &&
      <Addtask onAdd={addTask}/>
      }
      {/* <Button color='green' title="Dont Click me" onClick={dontClick} count={count} /> */}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>

      
    </div>
  );
}




export default App;
