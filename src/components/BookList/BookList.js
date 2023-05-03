import React from 'react';
import TeacherListHeader from './BookListHeader';
import TeacherListTable from './BookListTable';
import TeacherListTableFooter from './BookListTableFooter';



const BookList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <TeacherListHeader />
      <TeacherListTable />
      <TeacherListTableFooter />
    </div>
  );
};

export default BookList;
