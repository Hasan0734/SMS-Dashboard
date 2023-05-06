import React from 'react';
import ClassListHeader from './ClassListHeader';
import ClassListTable from './ClassListTable';
import ClassListTableFooter from './ClassListTableFooter';



const ClassList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <ClassListHeader />
      <ClassListTable />
      <ClassListTableFooter />
    </div>
  );
};

export default ClassList;
