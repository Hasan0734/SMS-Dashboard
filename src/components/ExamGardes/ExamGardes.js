import React from 'react';
import AddExamGardeForm from './AddExamGardeForm';
import ExamGradeList from '../ExamGradeList/ExamGradeList';

const ExamGardes = () => {
  return (
    <div className='mt-5 flex flex-col md:flex-row gap-6 items-start'>
      <AddExamGardeForm />
      <ExamGradeList />
    </div>
  );
};

export default ExamGardes;
