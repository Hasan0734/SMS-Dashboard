import React from 'react'

const UserGridViewItem = ({ user }) => {
  return (
    <div className='card'>
      <div className='p-2 text-right'>
        <button class='btn h-9 w-9 p-0 font-medium text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6'
            fill='none'
            viewbox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
        </button>
      </div>
      <div className='flex grow flex-col items-center px-4 pb-5 sm:px-5'>
        <div className='avatar h-20 w-20'>
          <img className='rounded-full' src={user.avatar} alt='avatar' />
        </div>
        <h3 className='pt-3 textLg font-medium text-slate-700 dark:text-navy-100'>
          {user?.name}
        </h3>
        <p className='text-xs+'>
          {`${user?.address[0]?.city}, ${user?.address[0]?.country}`}
        </p>
        <div className='inline-space mt-3 flex grow flex-wrap items-start'>
          {user.roles.map((role, index) => (
            <p
              key={index}
              className='tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25'
            >
              {role}
            </p>
          ))}
        </div>
        <div className='mt-6 grid w-full grid-cols-2 gap-2'>
          <button className='btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 shrink-0'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeWidth='2'
                d='M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z'
              />
            </svg>
            <span>Profile</span>
          </button>
          <button className='btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 shrink-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34'></path>
              <polygon points='18 2 22 6 12 16 8 16 8 12 18 2'></polygon>
            </svg>

            <span> Edit </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserGridViewItem
