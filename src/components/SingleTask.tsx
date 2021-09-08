import {FaTimes} from 'react-icons/fa'
import {Task} from './Tasks'

interface STProp {
  key: number;
  singleTask: Task;
  deleteTask(id:number): void;
}

const SingleTask:React.FC<STProp> = ({singleTask, deleteTask}) => {
  const {id, text, day, reminder} = singleTask

  return (
    <div className="p-3 flex justify-between bg-gray-400 my-3">
      <div className="ml-3">
      <h3>{text}</h3>
      <p>{day}</p>
      </div>
      
      <FaTimes 
      className="mr-2"
      onClick={() => deleteTask(id)}
      style={{color: 'red', cursor: 'pointer'}}
      />
    </div>
  )
}

export default SingleTask
