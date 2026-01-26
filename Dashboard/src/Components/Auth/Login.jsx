import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("form submitted")
        handleLogin(email,password)
        
        setEmail('')
        setPassword('')
    }
    return (
        <div className='bg-gray-800 text-white flex h-screen w-screen items-center justify-center'>
            <div className='border-3 border-black-900 rounded-tr-2xl  h-90 w-105 gap-6'>
                <form onSubmit={(e) => { handleSubmit(e) }} className='flex flex-col'>
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                        console.log(email)
                    }}
                    required className='font-bold border-4 border-red-100 m-6 rounded-t-2xl p-5 cursor-pointer' type="email" placeholder='Email' />
                    <input 
                    value={password}
                       onChange={(e)=>{
                        setPassword(e.target.value)
                        console.log(password)
                    }}
                    required className='border-4 font-bold border-red-100 m-6 rounded-t-2xl p-5 cursor-pointer' type="password" placeholder='Password' />
                    <button className='mt-2 font-bold bg-green-300  text-black text-2xl p-5 rounded-t-2xl m-6' type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
