import { Fragment } from 'react'
import SingleTask from './SingleTask'

export interface Task {  
    id: number;
    text: string;
    day: string;
    reminder: boolean;
}


interface TasksProps<Type>{
  tasks: Type[]
  deleteTask(id:number): void
}

const Tasks:React.FC<TasksProps<Task>> = ({tasks, deleteTask}) => {

  return (
    <Fragment>
      {tasks.map(task => (
        <SingleTask key={task.id} singleTask={task} deleteTask={deleteTask}/>
      ))}
    </Fragment>
  )
}

export default Tasks
