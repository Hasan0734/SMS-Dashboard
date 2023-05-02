import React from 'react'
import AppLogo from './../../assets/images/logos/logo.png'

const LoginHeader = () => {
  return (
    <div className='text-center'>
      <img className='mx-auto h-16 w-16' src={AppLogo} alt='logo' />
      <div className='mt-4'>
        <h2 className='text-2xl font-semibold text-slate-600 dark:text-navy-100'>
          Welcome Back
        </h2>
        <p className='text-slate-400 dark:text-navy-300'>
          Please sign in to continue
        </p>
      </div>
    </div>
  )
}

export default LoginHeader
