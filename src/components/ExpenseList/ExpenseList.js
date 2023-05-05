import React from 'react';
import StudentListHeader from './ExpenseListHeader';
import StudentListTable from './ExpenseListTable';
import StudentListTableFooter from './ExpenseListTableFooter';

const ExpenseList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <StudentListHeader />
      <StudentListTable />
      <StudentListTableFooter />
    </div>
  );
};

export default ExpenseList;
