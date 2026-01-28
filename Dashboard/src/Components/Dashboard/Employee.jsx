import React from 'react'
import Header from '../Others/Header'
import TaskList from '../Others/TaskList'
import Notification from '../Others/Notification'

const Employee = ({data}) => {
  return (
    <div className="min-h-screen family-sans bg-gray-800 text-white">
{/* <h1>{data.id}</h1> */}
      <Header data={data} />

      <hr className="border-gray-600" />


      <div className="max-w-6xl mx-auto p-6">

         
       <TaskList data={data} />
       
        
      </div>
      <hr className="border-gray-600" />
     <Notification className="bg-red-300" />
     <Notification className="bg-green-300" />
     <Notification className="bg-blue-300" />
     
      <hr />
    </div>
  )
}

export default Employee
