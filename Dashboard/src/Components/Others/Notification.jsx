
import React from 'react'
import AcceptedTask from '../TaskItems/AcceptedTask'
import NewTask from '../TaskItems/NewTask'
import FailedTask from '../TaskItems/FailedTask'

const Notification = ({ className }) => {
  return (
    <div>
         <AcceptedTask/>
         <NewTask />
         <FailedTask />
    </div>
  )
}

export default Notification
