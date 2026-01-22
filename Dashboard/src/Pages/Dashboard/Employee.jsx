import React from 'react'
import Header from '../Others/Header'
import TaskList from '../Others/TaskList'
import Notification from '../Others/Notification'

const Employee = () => {
  return (
    <div className="min-h-screen family-sans bg-gray-800 text-white">

      <Header />

      <hr className="border-gray-600" />


      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
         
       <TaskList className="bg-red-300" />
       <TaskList className="bg-green-300" />
       <TaskList className="bg-blue-300" />
       <TaskList className="bg-amber-300" />
        </div>
      </div>
      <hr className="border-gray-600" />
     <Notification />
     <Notification />
     <Notification />
     
      <hr />
    </div>
  )
}

export default Employee
