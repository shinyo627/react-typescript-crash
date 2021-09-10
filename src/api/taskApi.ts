import {Task} from '../ts/interfaces'


// Fetch tasks
export const fetchTasks = async(): Promise<Task[]> => {
  const res = await fetch('http://localhost:5000/tasks')

  const data = await res.json() as Task[]

  return data
}

// Fetch task
export const fetchTask = async(id: number): Promise<Task> => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)

  const data = await res.json() as Task

  return data
}

// Add a task
export const addTaskApi = async({text, dateNTime, reminder}: {text: string; dateNTime: string; reminder: boolean;}): Promise<Task>=> {
  const id = Math.floor(Math.random() * 10000) + 1
  const taskWithId = { id, text, dateNTime, reminder};

 const res = await fetch(`http://localhost:5000/tasks`, {
   method: 'POST',
   headers: {
     'Content-type': 'application/json'
   },
   body: JSON.stringify(taskWithId)
 })

 const newTask = await res.json() as Task

 return newTask
}

// Delete a task
export const deleteTaskApi = async(id: number):Promise<void> => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
}