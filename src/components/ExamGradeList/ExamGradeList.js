import React from 'react';
import ExamGradeListHeader from './ExamGradeListHeader';
import ExamGradeListTable from './ExamGradeListTable';
import ExamGradeListTableFooter from './ExamGradeListTableFooter';

const ExamGradeList = () => {
  return (
    <div className=' card p-4 space-y-4'>
      <ExamGradeListHeader />
      <ExamGradeListTable />
      <ExamGradeListTableFooter />
    </div>
  );
};

export default ExamGradeList;
