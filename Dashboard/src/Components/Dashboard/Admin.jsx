import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const Admin = ({data}) => {
 if (!data) return null
   return (
    <div className='bg-gray-800 min-h-screen flex flex-col text-white'>
      {/* <Header data={data} /> */}
      <hr />
       <CreateTask />
       <hr />
       <AllTask  />
    </div>
  )
}

export default Admin
