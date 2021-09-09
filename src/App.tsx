import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
const [showAddTask, setShowAddTask] = useState(false)
const [tasks, setTasks] = useState([
  {
    id: 1,
    text: "Doctors Appointment",
    dateNTime: "Feb 5th at 2:30pm",
    reminder: true
  },
  {
    id: 2,
    text: "Meeting at School",
    dateNTime: "Feb 6th at 1:30pm",
    reminder: true
  },
  {
    id: 3,
    text: 'Food Shopping',
    dateNTime: 'Feb 5th at 2',
    reminder: false
  }
])

const addTask = ({task: text, dateNTime, reminder}: {task: string; dateNTime: string; reminder: boolean;}):void => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, text, dateNTime, reminder};

  setTasks([...tasks, newTask])
}

const deleteTask = (id: number): void => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id: number): void => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
}

  return (
    <div className='max-w-screen-sm my-30px mx-auto overflow-auto	min-height-300 border-3 border-solid border-blue-300 p-30 rounded-5px'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      { showAddTask && <AddTask addTask={addTask}/>}
      
      {tasks.length > 0 ? ( 
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> 
      ) : (
        'No tasks to show...'
        )}
    </div>
  );
}

export default App;
