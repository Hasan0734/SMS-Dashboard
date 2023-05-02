import React from 'react'
import { latestOrdersDemo, statusColor } from '../../utils/data'

const DashboardLatestOrders = () => {
  return (
    <div class='card px-4 pb-4 sm:px-5'>
      <div class='my-3 flex h-8 items-center justify-between mb-3'>
        <h2 class='font-xl text-base tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-xl'>
          Latest Orders
        </h2>
        <button className='btn-indigo'>
          <span>View Orders</span>
        </button>
      </div>
      <div class='is-scrollbar-hidden min-w-full overflow-x-auto'>
        <table class='is-hoverable w-full text-left'>
          <thead>
            <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
              <th class='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
                ORDER
              </th>
              <th class='whitespace-nowrap bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
                STATUS
              </th>
              <th class='whitespace-nowrap bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
                DATE
              </th>
              <th class='whitespace-nowrap bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
                CUSTOMER
              </th>
              <th class='whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {latestOrdersDemo.map((data, index) => (
              <tr
                key={index}
                class='border border-transparent border-b-slate-200 dark:border-b-navy-500'
              >
                <td class='whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5'>
                  {data?.order}
                </td>
                <td
                  class={`whitespace-nowrap  px-4 py-3 sm:px-5 text-${
                    statusColor[data?.status]
                  } flex items-center space-x-1`}
                >
                  <span
                    className={`p-1 rounded-full bg-${
                      statusColor[data?.status]
                    }`}
                  >
                    {' '}
                  </span>
                  <span>{data?.status}</span>
                </td>
                <td class='whitespace-nowrap  px-4 py-3 sm:px-5'>
                  {new Date(data?.date).getDay() +
                    '/' +
                    new Date(data?.date).getMonth() +
                    '/' +
                    new Date(data?.date).getFullYear()}
                </td>
                <td class='whitespace-nowrap  px-4 py-3 sm:px-5'>
                  {data?.customer}
                </td>
                <td class='whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5'>
                  {data?.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardLatestOrders
