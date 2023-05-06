import React from 'react';
import BookListHeader from './BookListHeader';
import BookListTable from './BookListTable';
import BookListTableFooter from './BookListTableFooter';



const BookList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <BookListHeader />
      <BookListTable />
      <BookListTableFooter />
    </div>
  );
};

export default BookList;
