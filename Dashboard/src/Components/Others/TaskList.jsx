import React from 'react'

const TaskList = ({ className }) => {
  return (
    <div>
       <div className={`p-10 h-60 rounded-xl ${className}`}>
            <h1 className='text-3xl font-bold'>New Task</h1>
            <p className='mt-3 pl-5 text-4xl font-extrabold'>0</p>
          </div>
    </div>
  )
}

export default TaskList
