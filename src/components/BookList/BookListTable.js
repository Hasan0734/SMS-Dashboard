import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { ProductListDemo } from '../../utils/data';
import moment from 'moment';

const BookListTable = () => {
  return (
    <div class='is-scrollbar-hidden min-w-full overflow-x-auto'>
      <table class='is-hoverable w-full text-left'>
        <thead>
          <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
            <th class='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
             # ID
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
             BOOK NAME
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              WRITER
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              SUBJECT
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
            CLASS
            </th>
                 
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              YEAR
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              CREATING DATE
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
                {Math.ceil(Math.random() * 9999)}
              </td>
              <td class='whitespace-nowrap rounded-l-lg px-4 py-4 sm:px-5 flex items-center space-x-2'>
                <span>{data?.name}</span>
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>
              John Smith
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>
              Math
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5'>
              {['ONE', 'TWO', 'FIVE'].sort(() => Math.random() - 0.5)[1]}
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5'>2017</td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>{moment().format('DD/MM/YYYY')}</td>         
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

export default BookListTable;
