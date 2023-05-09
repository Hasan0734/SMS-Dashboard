import React from 'react';
import moment from 'moment';
import { CheckIcon } from '@heroicons/react/24/outline';

const Attendance = () => {
  const totalDate = moment().daysInMonth();

  return (
    <div className='mt-5'>
      <div className='card p-4'>
        <div className='min-w-full overflow-x-auto'>
          <table className='is-zebra w-full text-left'>
            <thead>
              <tr>
                <th className='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-2 2xl:px-5 flex items-center justify-between border-r border-gray-200'>
                  <span className='block'>Students</span>
                  <span className='block'>Date</span>
                </th>
                {[...Array(totalDate).keys()].map((date, i) => (
                  <th className='last:rounded-r-lg whitespace-nowrap bg-slate-200 px-1 py-1 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-2 2xl:px-5'>{++i}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className='font-bold px-2 py-3 flex items-center justify-between border-r border-gray-200'>
                  <span className='block'>Jahid Hasan</span>
                  <span className='block'></span>
                </td>

                {[...Array(totalDate).keys()].map((date, i) => (
                  <td className='px-1 py-3 text-center'>
                    <div className='w-full flex items-center justify-center'>
                      <CheckIcon className='w-4 h-4' />
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
