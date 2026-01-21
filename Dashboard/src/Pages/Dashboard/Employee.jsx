import React from 'react'

const Employee = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      
     
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
          <div className="p-10 bg-amber-300 h-60 rounded-xl">New Task</div>
          <div className="p-10 bg-red-300 h-60 rounded-xl">box2</div>
          <div className="p-10 bg-green-300 h-60 rounded-xl">box3</div>
          <div className="p-10 bg-blue-300 h-60 rounded-xl">box4</div>
        </div>
      </div>

    </div>
  )
}

export default Employee
