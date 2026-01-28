
import React from 'react'
import AcceptedTask from '../TaskItems/AcceptedTask'
import NewTask from '../TaskItems/NewTask'
import FailedTask from '../TaskItems/FailedTask'
import CompletedTask from '../TaskItems/CompletedTask'

const Notification = ({ data }) => {
  console.log(data.tasks)
  return (
    <div>
      {data.tasks.map((e) => {
        if (e.active) {
          return <AcceptedTask data={data} />
        }
        if (e.newTask) {
          return <NewTask data={data}/>
        }
        if (e.failed) {
          return <FailedTask data={data} />
        }
        if (e.completed) {
          return <CompletedTask data={data} />
        }
      })}
    </div>
  )
}

export default Notification
