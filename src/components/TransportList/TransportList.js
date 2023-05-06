import React from 'react';
import TransportListHeader from './TransportListHeader';
import TransportListTable from './TransportListTable';
import TransportListTableFooter from './TransportListTableFooter';



const TransportList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <TransportListHeader />
      <TransportListTable />
      <TransportListTableFooter />
    </div>
  );
};

export default TransportList;
