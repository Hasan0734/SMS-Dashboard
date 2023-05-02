import React from 'react';
import { Formik } from 'formik';
import ListboxSelect from '../ui/ListboxSelect';




const seassions = [
  { label: '2021-2022', value: '2021-2022' },
  { label: '2020-2021', value: '2020-2021' },
  { label: '2019-2020', value: '2019-2020' },
  { label: '2018-2019', value: '2018-2019' },
];


const classes = [
    { label: 'One', value: 'ONE' },
    { label: 'Two', value: 'TWO' },
    { label: 'Three', value: 'THREE' },
    { label: 'Four', value: 'FOUR' },
    { label: 'Five', value: 'FIVE' },
    { label: 'Six', value: 'SIX' },
    { label: 'Seven', value: 'SEVEN' },
    { label: 'Eight', value: 'EIGHT' },
    { label: 'Nine', value: 'NINE' },
    { label: 'Ten', value: 'TEN' },
  ];
const StudentPromotion = () => {
  const handleSearch = (values, { resetForm }) => {
    alert(JSON.stringify(values));
    // resetForm()
  };
  return (
    <div className='mt-5 card space-y-4'>
      <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
        <h2 className='font-semibold'>Search Student Promotion</h2>
      </div>
      <div className='p-4'>
        {/* Setup Fromik */}
        <Formik
          initialValues={{
            currentSession: '',
            promoteSession: '',
            promotionClass: '',
            promoteClass: '',
          }}
          //   validationSchema={}
          onSubmit={handleSearch}
        >
          {(formik, errors) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              {/* student info */}
              <div className=''>
                <h3
                  className='font-semibold text-xl relative 
              after:absolute after:w-10 after:h-1 after:bg-[#a3adc2]  after:-bottom-2 after:left-0'
                >
                  Student Information
                </h3>
                <div className=' gap-8 mt-8 grid grid-cols-3 xl:grid-cols-4'>
                  <ListboxSelect
                    options={seassions}
                    label='Current Seassion'
                    handleChange={formik.setFieldValue}
                    value={formik.values.currentSession}
                    name='currentSession'
                    error={formik.errors.currentSession}
                    placeholder='Select current Session'
                  />
                  <ListboxSelect
                    options={seassions}
                    label='Promote to Seassion'
                    handleChange={formik.setFieldValue}
                    value={formik.values.promoteSession}
                    name='promoteSession'
                    error={formik.errors.promoteSession}
                    placeholder='Select Promote to Seassion'
                  />

                  <ListboxSelect
                    options={classes}
                    label='Promotion Class'
                    handleChange={formik.setFieldValue}
                    value={formik.values.promotionClass}
                    name='promotionClass'
                    error={formik.errors.promotionClass}
                    placeholder='Select Promotion Class'
                  />
                  <ListboxSelect
                    options={classes}
                    label='Promote to Class'
                    handleChange={formik.setFieldValue}
                    value={formik.values.promoteClass}
                    name='promoteClass'
                    error={formik.errors.promoteClass}
                    placeholder='Select Promote to Class'
                  />
                </div>
              </div>

              <div className='flex space-x-2 justify-start mt-10'>
                <button
                  type='submit'
                  className='btn h-9 space-x-2 bg-accent  text-white
                 hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90
                  dark:bg-indigo-active dark:hover:bg-accent-focus 
                  dark:focus:bg-accent-focus dark:active:bg-accent/90'
                >
                  <span>Search</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StudentPromotion;
