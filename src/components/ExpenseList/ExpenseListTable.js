import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { ProductListDemo, statusColor } from '../../utils/data';

const ExpenseListTable = () => {
  return (
    <div class='is-scrollbar-hidden min-w-full overflow-x-auto'>
      <table class='is-hoverable w-full text-left'>
        <thead>
          <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
            <th class='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              ID
            </th>
            <th class='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              EXPENSE TYPE
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              NAME
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              AMOUNT
            </th>

            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              STATUS
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              PHONE
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              EMAIL
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              DATE
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
              class='border border-transparent border-b-slate-200 dark:border-b-navy-500 '
            >
              <td className='whitespace-nowrap  px-4 py-4 sm:px-5'>
                {++index}
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>
                {
                  ['Salary', 'Unitiliy Expense', 'Transport'].sort(
                    () => Math.random() - 0.5
                  )[1]
                }
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>{data?.name}</td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>$1000.00</td>
              <td
                class={`whitespace-nowrap  px-4 py-4 sm:px-5 text-${statusColor['paid']} `}
              >
                <div className='flex items-center justify-center space-x-1'>
                  <span
                    className={`p-1 rounded-full bg-${statusColor['paid']}`}
                  >
                    {' '}
                  </span>
                  <span>{'paid'}</span>
                </div>
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>017xxxxxxx</td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>
                s-email@gmail.com
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>01 Jan 2023</td>

              <td class='whitespace-nowrap rounded-r-lg px-4 py-4 sm:px-5 flex space-x-2'>
                <EyeIcon className='text-gray-500 h-5 w-5 cursor-pointer hover:text-error' />
                <PencilSquareIcon className='text-success h-5 w-5 cursor-pointer hover:text-success' />
                <TrashIcon className='text-error h-5 w-5 cursor-pointer hover:text-error' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseListTable;
