import React from 'react';
import ParentsListHeader from './ParentsListHeader';
import ParentsListTable from './ParentsListTable';
import ParentsListTableFooter from './ParentsListTableFooter';



const ParentsList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <ParentsListHeader />
      <ParentsListTable />
      <ParentsListTableFooter />
    </div>
  );
};

export default ParentsList;
