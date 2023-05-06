import { Formik } from 'formik';
import React from 'react';
import InputText from '../inputs/InputText';
import SelectOption from '../ui/SelectOption';
import { addExamScheduleSchema } from '../../schema/addExamScheduleSchema';

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

const subjectTypes = [
  { label: 'Mathmatics', value: 'MATHMATICS' },
  { label: 'Theory', value: 'Theory' },
  { label: 'Practical', value: 'PRACTICAL' },
];

const AddExamSchedule = () => {
  const initialValues = {
    examName: '',
    subjectType: '',
    class: '',
    section: '',
    time: '',
    date: '',
  };

  const addExamHandler = (values, { resetForm }) => {
    alert(JSON.stringify(values));
    // resetForm()
  };

  return (
    <div className='mt-5 card space-y-4'>
      <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
        <h2 className='font-semibold text-lg'>Add New Exam</h2>
      </div>
      <div className='p-5'>
        {/* Setup Fromik */}
        <Formik
          initialValues={initialValues}
          validationSchema={addExamScheduleSchema}
          onSubmit={addExamHandler}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              <div className='gap-8 grid grid-cols-3 xl:grid-cols-4'>
                <InputText
                  value={formik.values.examName}
                  error={formik.errors.examName}
                  name='examName'
                  label='Exam Name'
                  onChange={formik.handleChange}
                />

                <SelectOption
                  options={subjectTypes}
                  title='Subject Type'
                  value={formik.values.subjectType}
                  placeholder={'Please Select Class'}
                  error={formik.errors.subjectType}
                  handleChange={formik.setFieldValue}
                  name={'subjectType'}
                  label={true}
                />

                <SelectOption
                  options={classes}
                  title='Select Class'
                  value={formik.values.class}
                  placeholder={'Please select class'}
                  error={formik.errors.class}
                  handleChange={formik.setFieldValue}
                  name={'class'}
                  label={true}
                />
                <SelectOption
                  options={[
                    { label: 'A', value: 'A' },
                    { label: 'B', value: 'B' },
                    { label: 'C', value: 'C' },
                  ]}
                  title='Select Section'
                  value={formik.values.class}
                  placeholder={'Please select section'}
                  error={formik.errors.class}
                  handleChange={formik.setFieldValue}
                  name={'section'}
                  label={true}
                />

               
                  <InputText
                    value={formik.values.time}
                    error={formik.errors.time}
                    name='time'
                    label='Time'
                    type="time"
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.date}
                    error={formik.errors.date}
                    name='date'
                    label='Date'
                    type="date"
                    onChange={formik.handleChange}
                  />
                
              </div>

              <div className='flex space-x-2  mt-7'>
                <button
                  type='submit'
                  className='btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
                >
                  <span>Submit</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddExamSchedule;
