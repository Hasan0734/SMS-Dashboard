import React from 'react';
import StudentListHeader from './StudentFeeListHeader';
import StudentListTable from './StudentFeeListTable';
import StudentListTableFooter from './StudentFeeListTableFooter';

const StudentFeeList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <StudentListHeader />
      <StudentListTable />
      <StudentListTableFooter />
    </div>
  );
};

export default StudentFeeList;
