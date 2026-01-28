import React from 'react'

const NewTask = () => {
  return (
    <div>
           <div className="max-w-6xl mx-auto p-6 rounded-2xl mt-5 bg-blue-300">

        <div className='flex items-center justify-between' >
          <h1 className='p-2 mb-2 w-15 bg bg-red-400 rounded-2xl'>High</h1>
          <h1 className='font-bold' >20 Feb 2025</h1>
        </div>
        <h1 className='font-bold font-2xl'>Ek Aur Task</h1>
        <p className='mt-1'>Lorem ipsum dolor sit ame adipisicing elit. Assumenda voluptas voluptatibus pariatur amet molestias . Cum, similique ducimus.</p>
      <div className='mt-2 '>
        <button className='bg-green-400 rounded-xl p-2 text-black font-bold cursor-pointer'>Accept Task</button>
        {/* <button className='ml-4 bg-red-400 rounded-xl p-2 text-black font-bold cursor-pointer' >Mark as Failed</button> */}
      </div>
      </div>
    </div>
  )
}

export default NewTask
