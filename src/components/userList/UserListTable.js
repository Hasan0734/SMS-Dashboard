import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import React from 'react'
import { demoUsers } from '../../utils/data'

const UserListTable = () => {
  return (
    <div class='is-scrollbar-hidden min-w-full overflow-x-auto'>
      <table class='is-hoverable w-full text-left'>
        <thead>
          <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
            <th class='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              NAME
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              EMAIL
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              ADDRESS
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              ROLE
            </th>
            <th class='whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {demoUsers.map((data, index) => (
            <tr
              key={index}
              class='border border-transparent border-b-slate-200 dark:border-b-navy-500'
            >
              <td class='whitespace-nowrap rounded-l-lg px-4 py-4 sm:px-5 flex items-center space-x-2'>
                <img
                  className='h-8 w-8 rounded'
                  src={data?.avatar}
                  alt={data?.name}
                />
                <span>{data?.name}</span>
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5'>
                {data?.email}
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5 space-x-1'>
                {data?.address[0]?.addressLine}
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5'>
                <span className='tag rounded-full bg-slate-150 text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-100 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90'>
                  {data?.roles[0]}
                </span>
              </td>
              <td class='whitespace-nowrap rounded-r-lg px-4 py-4 sm:px-5 flex space-x-2'>
                <EyeIcon className='h-5 w-5 cursor-pointer hover:text-success' />
                <PencilSquareIcon className='h-5 w-5 cursor-pointer hover:text-success' />
                <TrashIcon className='h-5 w-5 cursor-pointer hover:text-error' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserListTable
