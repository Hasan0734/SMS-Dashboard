import React from 'react';
import AddSubjectForm from './AddSubjectForm';
import SubjectList from '../SubjectList/SubjectList';

const SubjectCard = () => {
  return (
    <div className='mt-5 flex flex-col md:flex-row gap-6 items-start'>
      <AddSubjectForm />
      <SubjectList />
    </div>
  );
};

export default SubjectCard;
