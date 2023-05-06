import React from 'react';
import SubjectListHeader from './SubjectListHeader';
import SubjectListTable from './SubjectListTable';
import SubjectListTableFooter from './SubjectListTableFooter';



const SubjectList = () => {
  return (
    <div className='card p-4 space-y-4'>
      <SubjectListHeader />
      <SubjectListTable />
      <SubjectListTableFooter />
    </div>
  );
};

export default SubjectList;
