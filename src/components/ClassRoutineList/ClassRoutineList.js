import React from 'react';
import ClassRoutineListHeader from './ClassRoutineListHeader';
import ClassRoutineListTable from './ClassRoutineListTable';
import ClassRoutineListTableFooter from './ClassRoutineListTableFooter';

const ClassRoutineList = () => {
  return (
    <div className='card p-4 space-y-4'>
      <ClassRoutineListHeader />
      <ClassRoutineListTable />
      <ClassRoutineListTableFooter />
    </div>
  );
};

export default ClassRoutineList;
