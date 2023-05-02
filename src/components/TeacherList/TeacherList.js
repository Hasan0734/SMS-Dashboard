import React from 'react';
import TeacherListHeader from './TeacherListHeader';
import TeacherListTable from './TeacherListTable';
import TeacherListTableFooter from './TeacherListTableFooter';



const TeacherList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <TeacherListHeader />
      <TeacherListTable />
      <TeacherListTableFooter />
    </div>
  );
};

export default TeacherList;
