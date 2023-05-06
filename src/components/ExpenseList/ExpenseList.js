import React from 'react';
import ExpenseListHeader from './ExpenseListHeader';
import ExpenseListTable from './ExpenseListTable';
import ExpenseListTableFooter from './ExpenseListTableFooter';

const ExpenseList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <ExpenseListHeader />
      <ExpenseListTable />
      <ExpenseListTableFooter />
    </div>
  );
};

export default ExpenseList;
