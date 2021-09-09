import { useState } from 'react'

interface AddTaskProp {
  addTask(task: {task: string; dateNTime: string; reminder: boolean;}): void
}

const AddTask: React.FC<AddTaskProp> = ({addTask}) => {
  const [formData, setFormData] = useState<{task: string; dateNTime: string; reminder: boolean}>({
    task: '',
    dateNTime: '',
    reminder: false,
  })

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    const {task, dateNTime} = formData
    e.preventDefault()
    // console.log(formData)

    if(!task || !dateNTime) {
      alert('Please add a task')
      return;
    }
    
    addTask(formData)
    setFormData( {task: '', dateNTime: '', reminder: false})
  }

  return (
    <form className="w-full h-full flex flex-col items-start" onSubmit={submitHandler}>
      <div className="">
        <label htmlFor=""></label>
        <input 
        type="text" 
        placeholder='Add Task'
        name='task'
        value={formData.task} 
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})}/>
      </div>

      <div className="">
        <label htmlFor=""></label>
        <input 
        type="text" 
        placeholder='Add Day n Time'
        name='dateNTime'
        value={formData.dateNTime}
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} />
      </div>

      <div className="">
        <label htmlFor="">Set Reminder</label>
        <input 
        type="checkbox"
        name='reminder'
        checked={formData.reminder}
        onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.checked})}}
        />
      </div>

      <input type="submit" value="Save" />
    </form>
  )
}

export default AddTask
