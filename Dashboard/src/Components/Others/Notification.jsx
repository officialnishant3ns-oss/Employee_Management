
import React from 'react'
import AcceptedTask from '../TaskItems/AcceptedTask'
import NewTask from '../TaskItems/NewTask'
import FailedTask from '../TaskItems/FailedTask'
import CompletedTask from '../TaskItems/CompletedTask'

const Notification = ({ className }) => {
  return (
    <div>
         <AcceptedTask/>
         <NewTask />
         <FailedTask />
         <CompletedTask/>
    </div>
  )
}

export default Notification
