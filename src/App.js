import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import { useState } from 'react';
import Tasks from './components/Tasks';

function App() {

  const [count, setCount] = useState(0);
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
  }
  // const dontClick = ()=>{
  //   //alert("Hi how are you")
  //   setCount(count - 1)
  // }
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Header title='Shuvashish' gem='Debnath' />
      <Button color='green' title="Click me" onClick={click} count={count} />
      {/* <Button color='green' title="Dont Click me" onClick={dontClick} count={count} /> */}
      <Tasks tasks={tasks} onDelete={deleteTask}/>

      
    </div>
  );
}




export default App;
