import React from 'react';
import DetailItem from './DetailItem';
import {
    ArrowDownTrayIcon,
    DocumentIcon,
    PencilSquareIcon,
  
  } from '@heroicons/react/24/outline';

const TeacherDetails = () => {
    return (
        <div className='mt-5 card space-y-4'>
        <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
          <h2 className='font-semibold'>About Jahid Hasan</h2>
        </div>
        <div className='flex gap-5 p-4'>
          <div className='w-60 h-60 bg-gray-100 mt-3'></div>
          <div className='flex-grow flex justify-between'>
          
            {/* details */}
            <div className=''>
              <ul>
          
                <DetailItem
                  label={"Name"}
                  value={"Jahid Hasan"}
                />
                <DetailItem
                  label={"Gender"}
                  value={"Male"}
                />
                <DetailItem
                  label={"Father Name"}
                  value={"Kazi Fahimur Rahman"}
                />
                <DetailItem
                  label={"Mother Name"}
                  value={"Richi Akhon"}
                />
             
                <DetailItem
                  label={"Date of Birth"}
                  value={"02/4/2023"}
                />
                <DetailItem
                  label={"Religion"}
                  value={"Islam"}
                />
                <DetailItem
                  label={"Father Occupation"}
                  value={"Businessman"}
                />
                <DetailItem
                  label={"E-mail"}
                  value={"richihasan@gmail.com"}
                />
                <DetailItem
                  label={"Admission Date"}
                  value={"05/04/2023"}
                />
                <DetailItem
                  label={"Class"}
                  value={"A"}
                />
             
                <DetailItem
                  label={"Section"}
                  value={"B"}
                />
             
                <DetailItem
                  label={"Roll"}
                  value={"2901"}
                />
             
                <DetailItem
                  label={"Address"}
                  value={"Ta-107 Sydenye, Australia"}
                />
                <DetailItem
                  label={"Phone"}
                  value={"+88 0174644"}
                />

              </ul>
            </div>
            <div className='flex justify-between '>
              <div className='flex gap-2'>
                <PencilSquareIcon className='bg-gray-100 dark:bg-gray-100/20 p-2 rounded  h-8 w-8 cursor-pointer hover:text-success' />
                <DocumentIcon className='bg-gray-100 dark:bg-gray-100/20 p-2 rounded  h-8 w-8 cursor-pointer hover:text-success' />
                <ArrowDownTrayIcon className='bg-gray-100 dark:bg-gray-100/20 p-2 rounded h-8 w-8 cursor-pointer hover:text-success' />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TeacherDetails;