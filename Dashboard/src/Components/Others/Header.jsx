import React from 'react'

const Header = ({data}) => {
  //logout there
  return (
    <div className=''>
         <div className="max-w-6xl mx-auto px-7 py-4">
        <h3 className="text-gray-400">Hello</h3>

        <div className="flex items-center justify-between mt-2">
          <h2 className="text-2xl font-semibold">{data.name} 👋🏻</h2>
          <button className="px-5 py-2 bg-red-400 text-black font-bold rounded-xl">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
