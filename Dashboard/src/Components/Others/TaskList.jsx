import React from 'react'

const TaskList = ({ data }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-9'>
        <div className="p-10 h-60 rounded-xl bg-red-300 ">
            <h1 className='text-3xl font-bold'>New Task</h1>
            <p className='mt-3 pl-5 text-4xl font-extrabold'>{data.taskCount.newTask}</p>
          </div>
       <div className="p-10 h-60 rounded-xl bg-green-300 ">
            <h1 className='text-3xl font-bold'>Task Completed</h1>
            <p className='mt-3 pl-5 text-4xl font-extrabold'>{data.taskCount.completed}</p>
          </div>
        <div className="p-10 h-60 rounded-xl bg-blue-300 ">
            <h1 className='text-3xl font-bold'>Active Task</h1>
            <p className='mt-3 pl-5 text-4xl font-extrabold'>{data.taskCount.active}</p>
          </div>
       <div className="p-10 h-60 rounded-xl bg-amber-300 ">
            <h1 className='text-3xl font-bold'>Failed Task</h1>
            <p className='mt-3 pl-5 text-4xl font-extrabold'>{data.taskCount.failed}</p>
          </div>
    </div>
  )
}

export default TaskList
