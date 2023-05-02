import React from 'react';

const DetailItem = ({label, value}) => {
  return (
    <>
      <li className='flex gap-2 my-5'>
        <span className='text-lg w-48 block'>{label}:</span>
        <span className='block text-lg font-semibold'>{value}</span>
      </li>
    </>
  );
};

export default DetailItem;
