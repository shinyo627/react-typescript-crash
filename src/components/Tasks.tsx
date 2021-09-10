import { Fragment } from 'react'
import { Task, Actions } from '../ts/interfaces'

import SingleTask from './SingleTask'


interface TasksProps<Task> extends Actions{
  tasks: Task[]
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
