import React from 'react';
import AddClassRoutineForm from './AddClassRoutineForm';
import ClassRoutineList from '../ClassRoutineList/ClassRoutineList';

const ClassRoutine = () => {
  return (
    <div className='mt-5 flex flex-col md:flex-row gap-6 items-start'>
        <AddClassRoutineForm/>
        <ClassRoutineList/>
    </div>
  );
};

export default ClassRoutine;
