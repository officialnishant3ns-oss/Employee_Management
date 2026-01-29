
// import React from 'react'
// import AcceptedTask from '../TaskItems/AcceptedTask'
// import NewTask from '../TaskItems/NewTask'
// import FailedTask from '../TaskItems/FailedTask'
// import CompletedTask from '../TaskItems/CompletedTask'

// const Notification = ({ data }) => {
//   console.log(data.tasks)
//   return (
//     <div>
//       {data.tasks.map((e) => { 
//         if (e.active) {
//           return <AcceptedTask data={data} />
//         }
//         if (e.newTask) { 
//           return <NewTask data={data}/>
//         }
//         if (e.failed) { 
//           return <FailedTask data={data} />
//         }
//         if (e.completed) {               // there we are checking condition 2 time so there it rendering 2 time in n=complted task portion there
//           return <CompletedTask data={data} />
//         }
//       })}
//     </div>
//   )
// }

// export default Notification


// by some there
// import React from 'react'
// import AcceptedTask from '../TaskItems/AcceptedTask'
// import NewTask from '../TaskItems/NewTask'
// import FailedTask from '../TaskItems/FailedTask'
// import CompletedTask from '../TaskItems/CompletedTask'

// const Notification = ({ data }) => {
//   return (
//     <div>
//       {data.tasks.some(t => t.newTask) && <NewTask data={data} />}

//       {data.tasks.some(t => t.active) && <AcceptedTask data={data} />}

//       {data.tasks.some(t => t.completed) && <CompletedTask data={data} />}

//       {data.tasks.some(t => t.failed) && <FailedTask data={data} />}
//     </div>
//   )
// }

// export default Notification

// directly  there m-3
import React from 'react'
import AcceptedTask from '../TaskItems/AcceptedTask'
import NewTask from '../TaskItems/NewTask'
import FailedTask from '../TaskItems/FailedTask'
import CompletedTask from '../TaskItems/CompletedTask'

const Notification = ({ data }) => {
  return (
    <div className="space-y-6">
      <NewTask data={data} />
      <AcceptedTask data={data} />
      <CompletedTask data={data} />
      <FailedTask data={data} />
    </div>
  )
}

export default Notification
