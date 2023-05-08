import React from 'react';
const randomColor = require('randomcolor');
const NoticeCard = ({ notice}) => {
  return (
    <div className='my-4 px-3'>
      <div className='border-b border-gray-200 dark:border-gray-600 py-4'>
        <h3 className='text-lg font-semibold mb-1'>16 May, 2017</h3>
        <div className='flex space-x-2 items-center mb-3'>
          <h2 className='text-lg font-bold' style={{ color: randomColor() }}>
            Jennyfar Lopez
          </h2>
          <span className='font-medium text-gray-400 dark:text-gray-500'>
            5 min ago
          </span>
        </div>
        <h2 className='text-lg font-semibold mb-1'>This is the test title</h2>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sed
          natus excepturi non sequi qui error quisquam omnis quos et deleniti
          maiores suscipit, ut quasi voluptatem eaque? Repellendus, quis
          delectus?
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
