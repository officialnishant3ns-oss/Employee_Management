
import React from 'react'
import AcceptedTask from '../TaskItems/AcceptedTask'
import NewTask from '../TaskItems/NewTask'

const Notification = ({ className }) => {
  return (
    <div>
         <AcceptedTask/>
         <NewTask />
    </div>
  )
}

export default Notification
