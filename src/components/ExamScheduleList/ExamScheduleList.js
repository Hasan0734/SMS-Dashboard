import React from 'react';
import ExamScheduleListHeader from './ExamScheduleListHeader';
import ExamScheduleListTable from './ExamScheduleListTable';
import ExamScheduleListTableFooter from './ExamScheduleListTableFooter';



const ExamScheduleList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <ExamScheduleListHeader />
      <ExamScheduleListTable />
      <ExamScheduleListTableFooter />
    </div>
  );
};

export default ExamScheduleList;
