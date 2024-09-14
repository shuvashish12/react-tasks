import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import Addtask from './components/Addtask';

function App() {

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState( [] )
  useEffect(() =>{
    const getTasks = async () =>{
    const taskFromServer = await fetchTasks();
    setTasks(taskFromServer);
    }
    getTasks();
  }, [])
  const fetchTasks = async () =>{
    const response = await fetch("http://localhost:5000/tasks");
    const data = response.json();
    return data;
  }
  
  
  const click = ()=>{
    //alert("Hi how are you")
    setCount(count +1)
    setShow(!show)
  }
  // const dontClick = ()=>{
  //   //alert("Hi how are you")
  //   setCount(count - 1)
  // }
  const addTask = async(task)=>{
    //const id= Math.floor(Math.random() *10000)+1;
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask]);

    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data =await response.json();
    setTasks([...tasks, data]);

  }
  const deleteTask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`,
      {method: 'DELETE'}
    )
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
      <Button color={show?'green':'red'} title="Add Task" onClick={click} count={count} />
      {show &&
      <Addtask onAdd={addTask}/>
      }
      {/* <Button color='green' title="Dont Click me" onClick={dontClick} count={count} /> */}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      
    </div>
  );
}
export default App;
