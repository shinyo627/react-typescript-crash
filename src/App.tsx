import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
const [tasks, setTasks] = useState([
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2',
    reminder: false
  }
])

const deleteTask = (id: number): void => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className='max-w-screen-sm my-30px mx-auto overflow-auto	min-height-300 border-3 border-solid border-blue-300 p-30 rounded-5px'>
      <Header />
      {tasks.length > 0 ? ( 
      <Tasks tasks={tasks} deleteTask={deleteTask}/> 
      ) : (
        'No tasks to show...'
        )}
    </div>
  );
}

export default App;
