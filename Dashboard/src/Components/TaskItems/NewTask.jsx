import React from 'react'

const NewTask = ({ data }) => {

  return (
    <div>
      {data.tasks.filter(t => t.active).map((t, i) => (
        
          <div key={i} className="max-w-6xl mx-auto p-6 rounded-2xl mt-5 bg-red-300">

            <div className='flex items-center justify-between'>
              <h1 className='p-2 mb-2 w-15 bg-red-400 rounded-2xl'>High</h1>
              <h1 className='font-bold'>{t.date}</h1>
            </div>

            <h1 className='font-bold text-2xl'>{t.title}</h1>

            <p className='mt-1'>{t.description}</p>

            <div className='mt-2'>
              <button className='bg-green-400 rounded-xl p-2 text-black font-bold cursor-pointer'>
                Accept Task
              </button>
            </div>

          </div>
        ))}
    </div>
  )
}

export default NewTask
