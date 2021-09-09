import { Fragment } from 'react'
import SingleTask from './SingleTask'

export interface Task {  
    id: number;
    text: string;
    dateNTime: string;
    reminder: boolean;
}

export interface Actions {
  deleteTask(id:number): void
  toggleReminder(id:number): void
}

interface TasksProps<Type> extends Actions{
  tasks: Type[]
  // deleteTask(id:number): void
  // toggleReminder(id:number): void
}

const Tasks:React.FC<TasksProps<Task>> = ({tasks, deleteTask, toggleReminder}) => {

  return (
    <Fragment>
      {tasks.map(task => (
        <SingleTask key={task.id} singleTask={task} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
      ))}
    </Fragment>
  )
}

export default Tasks
