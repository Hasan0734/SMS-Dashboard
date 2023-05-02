import React from 'react';
import StudentListHeader from './StudentListHeader';
import StudentListTable from './StudentListTable';
import StudentListTableFooter from './StudentListTableFooter';

const StudentList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <StudentListHeader />
      <StudentListTable />
      <StudentListTableFooter />
    </div>
  );
};

export default StudentList;
