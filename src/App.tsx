import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Task} from './components/Tasks'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
const [showAddTask, setShowAddTask] = useState(false)
const [tasks, setTasks] = useState<Task[] | []>([])

useEffect(() => {
  const getTasks = async() => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }

  getTasks()
}, [])

// Fetch tasks
const fetchTasks = async(): Promise<Task[]> => {
  const res = await fetch('http://localhost:5000/tasks')

  const data = await res.json() as Task[]

  return data
}

// Fetch task
const fetchTask = async(id: number): Promise<Task> => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)

  const data = await res.json() as Task

  return data
}


const addTask = async({task: text, dateNTime, reminder}: {task: string; dateNTime: string; reminder: boolean;}):Promise<void> => {
   const id = Math.floor(Math.random() * 10000) + 1
   const newTask = { id, text, dateNTime, reminder};

  const res = await fetch(`http://localhost:5000/tasks`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newTask)
  })

  const data = await res.json()

  setTasks([...tasks, data])
  
  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = { id, text, dateNTime, reminder};

  // setTasks([...tasks, newTask])
}

const deleteTask = async(id: number): Promise<void> => {
  await fetch(`http//localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = async(id: number): Promise<void> => {
  const taskToggle = await fetchTask(id)
  const updatedTask = { ...taskToggle, reminder: !taskToggle.reminder };

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      "Content-type": 'application/json'
    },
    body: JSON.stringify(updatedTask)
  })

  const data = await res.json() as Task

  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder} : task))
}

  return (
    <Router>
    <div className='max-w-screen-sm my-30px mx-auto overflow-auto	min-height-300 border-3 border-solid border-blue-300 p-30 rounded-5px'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      <Route path='/' exact render ={(props) => (
        <>
        { showAddTask && <AddTask addTask={addTask}/>}
      
        { tasks.length > 0 ? ( 
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> 
      ) : ('No tasks to show...' ) }
        </>
      )} />
      <Route exact path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
