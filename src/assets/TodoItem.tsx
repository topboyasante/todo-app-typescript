import { ITask } from './interfaces'

interface ITodoItemProps{
    task:ITask
    completeTask(taskToDelete:string):void
}

const TodoItem = ({task,completeTask}:ITodoItemProps) => {
  return (
    <main className='shadow p-5 rounded md:flex justify-between items-center'>
        <div className='my-5 md:my-0'>You have to {task.taskName.toLowerCase()} in {task.duration} {task.durationMeasure}.</div>
        <button className="px-4 py-2 rounded bg-red-700 text-white" onClick={()=>{completeTask(task.taskName)}}>
          <span>I've completed the task!</span>
        </button>
    </main>
  )
}

export default TodoItem