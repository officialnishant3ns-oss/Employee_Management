import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const Admin = () => {
  return (
    <div className='bg-gray-800 min-h-screen flex flex-col text-white'>
      <Header />
      <hr />
       <CreateTask />
       <hr />
       <AllTask />
    </div>
  )
}

export default Admin
