import React from 'react';
import NoticeListHeader from './NoticeListHeader';
import NoticeCard from './NoticeCard';




const NoticeList = () => {
  return (
    <div className='card p-4 space-y-4 w-full'>
      <NoticeListHeader />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((notice, i) => (
        <NoticeCard  notice={notice} key={i} />
      ))}
    </div>
  );
};

export default NoticeList;
