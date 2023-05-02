import React from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

const DashboardAmountCardItem = ({ title, amount, range, percentage }) => {
  return (
    <div class='card px-4 py-4 sm:px-5'>
      <div>
        <h2 class='text-md font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100'>
          {title}
        </h2>
      </div>
      <div class='pt-2 flex justify-between items-center'>
        <div>
          <h2 class='text-xl font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100'>
            {amount}
          </h2>
          <p>{range}</p>
        </div>
        <div
          className={`bg-${
            percentage >= 0 ? 'success' : 'warning'
          } text-white px-2 py-0.5 rounded-xl`}
        >
          <button className='flex justify-between items-center space-x-0.5'>
            <ArrowUpIcon
              className={`h-3 w-3 ${percentage >= 0 ? '' : 'rotate-180'}`}
            />
            <span className='text-xs'>{percentage}%</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardAmountCardItem
