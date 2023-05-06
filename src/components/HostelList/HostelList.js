import React from 'react';
import HostelListHeader from './HostelListHeader';
import HostelListTable from './HostelListTable';
import HostelListTableFooter from './HostelListTableFooter';



const HostelList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <HostelListHeader />
      <HostelListTable />
      <HostelListTableFooter />
    </div>
  );
};

export default HostelList;
