import React from 'react'

const Employee = () => {
  return (
    <div className="min-h-screen family-sans bg-gray-800 text-white">


      <div className="max-w-6xl mx-auto p-6">
        <h3 className="text-gray-400">Hello</h3>

        <div className="flex items-center justify-between mt-2">
          <h2 className="text-2xl font-semibold">Nishant 👋🏻</h2>
          <button className="px-5 py-2 bg-red-400 text-black font-bold rounded-xl">
            Logout
          </button>
        </div>
      </div>

      <hr className="border-gray-600" />


      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-10 bg-amber-300 h-60 rounded-xl">
            <h1 className='text-3xl font-bold'>New Task</h1>
            <p className='mt-3 pl-5 text-4xl font-extrabold'>0</p>
          </div>
          <div className="p-10 bg-red-300 h-60 rounded-xl">
            <h1 className='text-3xl font-bold'>Completed Task</h1>
            <p className='mt-3 pl-5 text-4xl font-extrabold'>2</p>
          </div>
          <div className="p-10 bg-green-300 h-60 rounded-xl">
            <h1 className='text-3xl font-bold'>Failed Task</h1>
            <p className='mt-3 pl-5 text-4xl font-extrabold'>4</p>
          </div>
          <div className="p-10 bg-blue-300 h-60 rounded-xl">
            <h1 className='text-3xl font-bold'>Accepted Task</h1>
            <p className='mt-3 pl-5 text-4xl font-extrabold'>1</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-600" />
        <div className='bg-red-300 max-w-6xl mx-auto p-6 rounded-2xl mt-5'>
      
          <div className='flex items-center justify-between' >
            <h1 className='p-2 mb-2 w-15 bg bg-red-400 rounded-2xl'>High</h1>
            <h1 className='font-bold' >20 Feb 2025</h1>
          </div>
          <h1 className='font-bold font-2xl'>Ek Aur Task</h1>
          <p className='mt-1'>Lorem ipsum dolor sit ame adipisicing elit. Assumenda voluptas voluptatibus pariatur amet molestias . Cum, similique ducimus.</p>
         </div>
        <div className='bg-blue-300 max-w-6xl mx-auto p-6 rounded-2xl mt-5'>
      
          <div className='flex items-center justify-between' >
            <h1 className='p-2 w-15 mb-2 bg bg-red-400 rounded-2xl'>High</h1>
            <h1 className='font-bold' >20 Feb 2025</h1>
          </div>
          <h1 className='font-bold font-2xl'>Ek Aur Task</h1>
          <p className='mt-1'>Lorem ipsum dolor sit ame adipisicing elit. Assumenda voluptas voluptatibus pariatur amet molestias . Cum, similique ducimus.</p>
         </div>
        <div className='bg-green-300  max-w-6xl mx-auto p-6 rounded-2xl mt-5'>
      
          <div className='flex items-center justify-between ' >
            <h1 className='p-2 mb-2 w-15 bg bg-red-400 rounded-2xl'>High</h1>
            <h1 className='font-bold' >20 Feb 2025</h1>
          </div>
          <h1 className='font-bold font-2xl'>Ek Aur Task</h1>
          <p className='mt-1'>Lorem ipsum dolor sit ame adipisicing elit. Assumenda voluptas voluptatibus pariatur amet molestias . Cum, similique ducimus.</p>
         </div>
         <hr />
    </div>
  )
}

export default Employee
