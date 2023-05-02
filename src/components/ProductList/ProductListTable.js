import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { getStockStatus } from '../../utils/calculateStock'
import { ProductListDemo } from '../../utils/data'

const ProductListTable = () => {
  return (
    <div class='is-scrollbar-hidden min-w-full overflow-x-auto'>
      <table class='is-hoverable w-full text-left'>
        <thead>
          <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
            <th class='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              NAME
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              CATEGORY
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              QUANTITY
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              STATUS
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              PRICE
            </th>
            <th class='whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {ProductListDemo.map((data, index) => (
            <tr
              key={index}
              class='border border-transparent border-b-slate-200 dark:border-b-navy-500'
            >
              <td class='whitespace-nowrap rounded-l-lg px-4 py-4 sm:px-5 flex items-center space-x-2'>
                <img
                  className='h-8 w-8 rounded'
                  src='https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp'
                  alt={data?.name}
                />
                <span>{data?.name}</span>
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>
                {['Men', 'Women', 'Kids'].sort(() => Math.random() - 0.5)[1]}
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5'>
                {data?.countInStock}
              </td>
              <td
                class={`whitespace-nowrap  px-4 py-4 sm:px-5 text-${
                  getStockStatus(data.countInStock)?.color
                } flex items-center space-x-1`}
              >
                <span
                  className={`p-1 rounded-full bg-${
                    getStockStatus(data.countInStock)?.color
                  }`}
                >
                  {' '}
                </span>
                <span>{getStockStatus(data.countInStock)?.title}</span>
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>
                ${data?.price}
              </td>
              <td class='whitespace-nowrap rounded-r-lg px-4 py-4 sm:px-5 flex space-x-2'>
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

export default ProductListTable
