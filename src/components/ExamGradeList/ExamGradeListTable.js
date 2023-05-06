import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { ProductListDemo } from '../../utils/data';

const ExamGradeListTable = () => {
  return (
    <div class='is-scrollbar-hidden min-w-full overflow-x-auto'>
      <table class='is-hoverable w-full text-left'>
        <thead>
          <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              GRADE NAME
            </th>

            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              GRADE POINT
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              PERCENT FROM
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              PERCENT UPTO
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              COMMENT
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
              <td
                class='whitespace-nowrap rounded-l-lg px-4 py-4 sm:px-5
               flex items-center'
              >
                {data?.name}
              </td>

              <td class='whitespace-nowrap  px-4 py-4 sm:px-5'>4.00</td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5 text-center'>
                95.00
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5 text-center'>
                100.00
              </td>

              <td class=' px-4 py-4 sm:px-5 max-w-[120px] overflow-hidden'>
                <div className='whitespace-nowrap overflow-hidden text-ellipsis'>Lorem is the best fdf dfdf dfd gfg gfgfgfggf</div>
              </td>

              <td class='whitespace-nowrap rounded-r-lg px-4 py-4 sm:px-5 '>
                <div className='flex space-x-2'>
                  <EyeIcon className='text-gray-500 h-5 w-5 cursor-pointer hover:text-error' />
                  <PencilSquareIcon className='text-success h-5 w-5 cursor-pointer hover:text-success' />
                  <TrashIcon className='text-error h-5 w-5 cursor-pointer hover:text-error' />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamGradeListTable;
