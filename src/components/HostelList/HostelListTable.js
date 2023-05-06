import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { ProductListDemo } from '../../utils/data';

const HostelListTable = () => {
  return (
    <div class='is-scrollbar-hidden min-w-full overflow-x-auto'>
      <table class='is-hoverable w-full text-left'>
        <thead>
          <tr class='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              ROUTE NAME
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              VECHILE NO
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              DRIVER NAME
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              DRIVER LICENSE
            </th>
            <th class='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              CONTACT NUMBER
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
                Gulshan-1
              </td>

              <td class='whitespace-nowrap  px-4 py-4 sm:px-5'>
               MT9888800
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5 text-center'>
               Shahjjahan Khan
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5 text-center'>
               DLNC 02589445
              </td>
              <td class='whitespace-nowrap  px-4 py-4 sm:px-5'>
                017XXXXXXXX
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

export default HostelListTable;
