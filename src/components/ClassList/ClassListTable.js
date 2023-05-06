import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { ProductListDemo } from '../../utils/data';

const ClassListTable = () => {
  return (
    <div class='is-scrollbar-hidden min-w-full overflow-x-auto'>
      <table class='is-hoverable w-full text-left'>
        <thead>
          <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
            <th class='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
             # ID
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
             TEACHER NAME
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              GENDER
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              SUBJECT
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              CLASS
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              SECTION
            </th>
         
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              DATE
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              TIME
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              MOBILE NO
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              EMAIL
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
                #{Math.ceil(Math.random() * 9999)}
              </td>
              <td class='whitespace-nowrap rounded-l-lg px-4 py-4 sm:px-5 flex items-center space-x-2'>
                <img
                  className='h-8 w-8 rounded'
                  src='https://i.ibb.co/TL2zPNG/IMG-6217-inn-768x768.webp'
                  alt={data?.name}
                />
                <span>{data?.name}</span>
              </td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5 text-center'>
                {['Men', 'Women', 'Kids'].sort(() => Math.random() - 0.5)[1]}
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5 text-center'>
              {['Math', 'English', 'Bangla', 'Phyics', 'Chemistry'].sort(() => Math.random() - 0.5)[1]}
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5 text-center'>
              {['One', 'Two', 'Three', 'Four', 'Five'].sort(() => Math.random() - 0.5)[1]}
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5 text-center'>
              {['A', 'B', 'C'].sort(() => Math.random() - 0.5)[1]}
              </td>
            
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>01 Jan 2023</td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5'>10.00 am - 11.00 am</td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>017xxxxxxx</td>
              <td class='whitespace-nowrap px-4 py-4 sm:px-5'>s-email@gmail.com</td>


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

export default ClassListTable;
