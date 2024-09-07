import {useState} from 'react'

function Addtask({onAdd}) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e) =>{
        e.preventDefault();
        if(!text) {
            alert('Add a task');
            return;
        }
        onAdd({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
        
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input
                type='text'
                placeholder='Add Task'
                value={text}
                onChange= {(e) => setText(e.target.value)}

            />
        </div>
        <div className='form-control'>
            <label>Day & time</label>
            <input
                type='text'
                placeholder='Day and time'
                value={day}
                onChange= {(e) => setDay(e.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Add Reminder</label>
            <input
                type='checkbox'
                checked={reminder}
                placeholder='Reminder'
                value={reminder}
                onChange={((e) => setReminder(e.currentTarget.checked))}
            />
        </div>
        <div className='btn'>
            <input
                type='submit'
                value='Save Task'
            />
        </div>
      
    </form>
  )
}

export default Addtask
