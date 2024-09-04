import React from 'react'
import Button from './Button'

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className='text-4xl sm:text-5xl md:text-6xl'>Log In / Register</h3>
      <p>You're one step away!</p>
      <input className='w-full mx-auto max-w-[400px] duration-300 hover:border-indigo-600 focus:border-indigo-600 px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' placeholder='Email'/>
      <input className='w-full mx-auto max-w-[400px] duration-300 hover:border-indigo-600 focus:border-indigo-600 px-3 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none' placeholder='Password' type='password'/>
      <div className='max-w-[400px] w-full mx-auto'>
        <Button text='Submit' dark full></Button>
      </div>
      <p className='italic text-center'>Don't have an account? <span className='text-indigo-600'>Sign Up</span></p>
    </div>
  )
}
