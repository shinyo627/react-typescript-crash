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

 const onChangeHanlder: React.ChangeEventHandler<HTMLInputElement> = (e) => {
   console.log(e.target)
   if(e.target.checked) {
     console.log(e.target.checked)
    setFormData({...formData, [e.target.name]: e.target.checked})
   } else {
    setFormData({...formData, [e.target.name]: e.target.value})
   }
 }

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
        onChange={onChangeHanlder} />
      </div>

      <div className="">
        <label htmlFor=""></label>
        <input 
        type="text" 
        placeholder='Add Day n Time'
        name='dateNTime'
        value={formData.dateNTime}
        onChange={onChangeHanlder} />
      </div>

      <div className="">
        <label htmlFor="">Set Reminder</label>
        <input 
        type="checkbox"
        name='reminder'
        checked={formData.reminder}
        onChange={onChangeHanlder}
        />
      </div>

      <input type="submit" value="Save" />
    </form>
  )
}

export default AddTask
