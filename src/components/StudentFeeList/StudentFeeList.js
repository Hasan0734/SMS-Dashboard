import React from 'react';
import StudentFeeListHeader from './StudentFeeListHeader';
import StudentFeeListTable from './StudentFeeListTable';
import StudentFeeListTableFooter from './StudentFeeListTableFooter';

const StudentFeeList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <StudentFeeListHeader />
      <StudentFeeListTable />
      <StudentFeeListTableFooter />
    </div>
  );
};

export default StudentFeeList;
