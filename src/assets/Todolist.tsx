import { ChangeEvent, useState } from "react";
import { ITask } from "./interfaces";
import TodoItem from "./TodoItem";

interface Option {
  value: string;
  label: string;
}
const options: Option[] = [
  { value: 'select', label: '--Select--' },
  { value: 'seconds', label: 'Seconds' },
  { value: 'minutes', label: 'Minutes' },
  { value: 'hours', label: 'Hours' },
  { value: 'days', label: 'Days' },
  { value: 'months', label: 'Months' },
  { value: 'years', label: 'Years' },
];

function Todolist() {
  const [task,setTask] = useState<string>("")
  const [duration,setDuration] = useState<number>(0)
  const [timeMeasure,setTimeMeasure] = useState<string>("select")
  const [todoList,setTodoList] = useState<ITask[]>([])


  const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
    switch(event.target.name){
       case "task":
        setTask(event.target.value)
       break
       case "duration":
        setDuration(Number(event.target.value))
       break
    }
  }

  const handleSelectChange = (event:ChangeEvent<HTMLSelectElement>):void =>{
    if(event.target.name === "duration-measure"){
      setTimeMeasure(event.target.value)
    }
  }

  const resetFunction = ():void =>{
    setTask("")
    setDuration(0)
    setTimeMeasure("select")
  }

  const addTask = (): void => {
    const newTask = {taskName: task, duration:duration, durationMeasure:timeMeasure}
    setTodoList([...todoList,newTask])
    resetFunction()
  }

  const completeTask = (taskToDelete:string):void => {
    setTodoList(todoList.filter((task)=>{
      return task.taskName !== taskToDelete
    }))
  }

  return (
    <main className="p-5">
      {/* Header */}
      <section>
          <h1 className="text-3xl font-bold">Hello! What are we doing today?</h1>
          <p className="text-xl my-2 text-gray-500">whatToDo will store your tasks for you. Cancel them when you complete them!</p>
      </section>
      <hr className="my-5 border-black"/>
      {/* Body */}
      <section>
        <div className="mb-5">
          <label htmlFor="task" className="text-xl">Task:</label>
          <input type="text" name="task" id="task" className="border w-full p-2 text-lg rounded-xl" 
          value={task}
          onChange={handleChange}/>
        </div>

        <div className="md:flex justify-between items-center gap-5">
          <div className="mb-5 md:w-[50%]">
            <label htmlFor="duration" className="text-xl">Duration:</label>
            <br />
            <input type="number" name="duration" id="task" className="border w-[100%] p-2 text-lg rounded-xl" 
             value={duration}
             onChange={handleChange}/>
          </div>

          <div className="mb-5 md:w-[50%]">
            <label htmlFor="duration" className="text-xl">Measure of Duration:</label>
            <br />
            <select value={timeMeasure} onChange={handleSelectChange} name="duration-measure" className="border w-[100%] p-2 text-lg rounded-xl">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="px-4 py-2 rounded shadow bg-green-900 text-white" onClick={addTask}>
          <span>Add Task</span>
        </button>
      </section>
      {/* Tasks */}
      <section className="my-8">
        <h1 className="text-center font-bold text-2xl">Available Tasks:</h1>
        {todoList.map((item:ITask,key:number)=>{
          return<TodoItem key={key} task={item} completeTask={completeTask}/>
        })}
      </section>
    </main>
  )
}

export default Todolist