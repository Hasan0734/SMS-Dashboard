import React from 'react'
import { topSellingDemo } from './../../utils/data'

const DashboardTopSelling = () => {
  return (
    <div class='card px-4 pb-4 sm:px-5'>
      <div class='my-3 flex h-8 items-center justify-between mb-3'>
        <h2 class='font-xl text-base tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-xl'>
          Top Selling
        </h2>
        <button className='btn-indigo'>
          <span>View Selling</span>
        </button>
      </div>
      <div class='is-scrollbar-hidden min-w-full overflow-x-auto'>
        <table class='is-hoverable w-full text-left'>
          <thead>
            <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
              <th class='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
                PRODUCT
              </th>
              <th class='whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
                SOLD
              </th>
            </tr>
          </thead>
          <tbody>
            {topSellingDemo.map((data, index) => (
              <tr
                key={index}
                class='border border-transparent border-b-slate-200 dark:border-b-navy-500'
              >
                <td class='whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5 flex items-center space-x-2'>
                  <img
                    src={data?.image}
                    alt={data?.product}
                    className='rounded w-7 h-7'
                  />
                  <span>{data?.product}</span>
                </td>
                <td class='whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5'>
                  {data?.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardTopSelling
