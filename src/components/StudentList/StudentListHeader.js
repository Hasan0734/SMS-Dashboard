import { FunnelIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { SvgSearchIcon } from '../../utils/svgIcons';
import { Link } from 'react-router-dom';

const StudentListHeader = () => {
  return (
    <div className='flex items-center justify-between '>
      <div>
        <h2 className='text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl'>
          All Students
        </h2>
      </div>
      <div className='flex space-x-2'>
        <label class='relative flex'>
          <input
            class='form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
            placeholder='Search here...'
            type='text'
          />
          <div class='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
            {SvgSearchIcon}
          </div>
        </label>
        <button className='flex space-x-1 btn-indigo'>
          <FunnelIcon className='h-5 w-5' />
          <span>Filter</span>
        </button>
        <Link to={`/?tab=add_teacher}`}>
       <button className='flex space-x-1 btn-indigo-active'>
          <PlusCircleIcon className='h-5 w-5' />
          <span>Add Student</span>
        </button>
       </Link>
       
      </div>
    </div>
  )
}

export default StudentListHeader
