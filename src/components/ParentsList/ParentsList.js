import React from 'react';
import TeacherListHeader from './ParentsListHeader';
import TeacherListTable from './ParentsListTable';
import TeacherListTableFooter from './ParentsListTableFooter';



const ParentsList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <TeacherListHeader />
      <TeacherListTable />
      <TeacherListTableFooter />
    </div>
  );
};

export default ParentsList;
