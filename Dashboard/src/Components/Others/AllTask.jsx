import React from 'react'

const AllTask = () => {
    return (
        <div className='bg-gray-800 h-150 overflow-auto scroll-auto'>
            <div className='max-w-6xl mx-auto px-7 py-4'>
                <h2 className="text-xl font-semibold">All Tasks</h2>
                <div className="mt-4 p-3 bg-blue-300 rounded-2xl">
                    <h2 className='text-black font-bold'>Title</h2>
                    <h3>UI Design</h3>
                    <p>Description: Create a modern UI design for the new app.</p>
                    <p>Due Date: 2024-07-15</p>
                    <p>Assigned To: John Doe</p>
                    <p>Category: Design</p>
                </div>
                <div className="mt-4 p-3 bg-green-300 rounded-2xl">
                    <h2 className='text-black font-bold'>Title</h2>
                    <h3>UI Design</h3>
                    <p>Description: Create a modern UI design for the new app.</p>
                    <p>Due Date: 2024-07-15</p>
                    <p>Assigned To: John Doe</p>
                    <p>Category: Design</p>
                </div>
            </div>
        </div>
    )
}

export default AllTask
