import React from 'react'

const CreateTask = () => {
  return (
    <div>
            <form
    className='p-5 max-w-6xl ml-40 mr-30 '
        action="">
        <h1 className='font-2xl mb-1 family-sans '>Task Title</h1>
        <input
          className='w-full p-2 rounded bg-gray-700 text-white border-2 border-gray-600 mb-4  '
          type="text" placeholder='Make a UI Design' />
        <h1 className='font-2xl mb-1 family-sans '>Description</h1>
        <textarea
          className='w-full p-2 h-35 rounded bg-gray-700 text-white border-2 border-gray-600 mb-4  '

          placeholder='Enter description here'></textarea>
        <h1 className='font-2xl mb-1 family-sans '>Due Date</h1>
        <input
          className='w-full p-2 rounded bg-gray-700 text-white border-2 border-gray-600 mb-4  '

          type="date" placeholder='' />
        <h1 className='font-2xl mb-1 family-sans '>Assign To</h1>
        <input className='w-full p-2 rounded bg-gray-700 text-white border-2 border-gray-600 mb-4  '
          type="text" placeholder='Assign to user' />
        <h1 className='font-2xl mb-2 family-sans '>Category</h1>
        <input className='w-full p-2 rounded bg-gray-700 text-white border-2 border-gray-600 mb-4  '
          type="text" placeholder='Enter category' />
        <button
        className='p-4 mb-1 bg-green-400 rounded-2xl font-bold w-35'
         type='submit'>Create Task</button>

      </form>
    </div>
  )
}

export default CreateTask
