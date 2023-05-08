import React from 'react';
import AddNoticeForm from './AddNoticeForm';
import NoticeList from './NoticeList';


const Notice = () => {
  return (
    <div className='mt-5 flex flex-col md:flex-row gap-6 items-start'>
      <AddNoticeForm />
      <NoticeList />
    
    </div>
  );
};

export default Notice;
