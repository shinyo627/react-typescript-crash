import {FaTimes} from 'react-icons/fa'
import {Task, Actions} from './Tasks'


interface STProp extends Actions{
  key: number;
  singleTask: Task;
}

const SingleTask:React.FC<STProp> = ({singleTask, deleteTask, toggleReminder}) => {
  const {id, text, dateNTime, reminder} = singleTask

  return (
    <div className={`h-full p-3 flex justify-between bg-gray-400 my-3 ${reminder && `border-4 border-yellow-300`}`}
     onDoubleClick={() => toggleReminder(id)}>
      <div className="ml-3">
      <h3>{text}</h3>
      <p>{dateNTime}</p>
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
