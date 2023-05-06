import React from 'react';
import { Formik } from 'formik';
import InputText from '../inputs/InputText';
import SelectOption from '../ui/SelectOption';
import { addClassSchema } from '../../schema/addClassSchema';

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

const sections = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' },
];

const AddNewClass = () => {
  const addClassHandler = (values, { resetForm }) => {
    alert(JSON.stringify(values));
    // resetForm()
  };

  const initialValues = {
    teacherName: '',
    ID: '',
    class: '',
    section: '',
    gender: '',
    subject: '',
    startTime: '',
    endTime: '',
    date: '',
    email: '',
    phone: '',
  };

  return (
    <div className='mt-5 card space-y-4'>
      <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
        <h2 className='font-semibold text-lg'>Class Information</h2>
      </div>
      <div className='p-5'>
        {/* Setup Fromik */}
        <Formik
          initialValues={initialValues}
          validationSchema={addClassSchema}
          onSubmit={addClassHandler}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              <div className=' gap-8 grid grid-cols-3 xl:grid-cols-4'>
                <InputText
                  value={formik.values.teacherName}
                  error={formik.errors.teacherName}
                  name='teacherName'
                  label='Teacher Name'
                  onChange={formik.handleChange}
                />
                <InputText
                  value={formik.values.ID}
                  error={formik.errors.ID}
                  name='ID'
                  label='ID'
                  onChange={formik.handleChange}
                />

                <SelectOption
                  options={[
                    { label: 'Male', value: 'MALE' },
                    { label: 'Female', value: 'FEMALE' },
                  ]}
                  title='Gender'
                  value={formik.values.gender}
                  placeholder={'Please Select Gender'}
                  error={formik.errors.gender}
                  handleChange={formik.setFieldValue}
                  name={'gender'}
                  label={true}
                />

                <SelectOption
                  options={classes}
                  title='Class'
                  value={formik.values.class}
                  placeholder={'Please Select Class'}
                  error={formik.errors.class}
                  handleChange={formik.setFieldValue}
                  name={'class'}
                  label={true}
                />
                <SelectOption
                  options={[
                    { label: 'Math', value: 'MATH' },
                    { label: 'English', value: 'ENGLISH' },
                    { label: 'BANGLA', value: 'BANGLA' },
                    { label: 'Science', value: 'SCIENCE' },
                  ]}
                  title='Subject'
                  value={formik.values.subject}
                  placeholder={'Please Select Subject'}
                  error={formik.errors.subject}
                  handleChange={formik.setFieldValue}
                  name={'subject'}
                  label={true}
                />

                <SelectOption
                  options={sections}
                  title='Section'
                  value={formik.values.section}
                  placeholder={'Please Select Section'}
                  error={formik.errors.section}
                  handleChange={formik.setFieldValue}
                  name={'section'}
                  label={true}
                />

                <InputText
                  value={formik.values.startTime}
                  error={formik.errors.startTime}
                  name='startTime'
                  label='Start Time'
                  type='time'
                  placeholder=''
                  onChange={formik.handleChange}
                />
                <InputText
                  value={formik.values.endTime}
                  error={formik.errors.endTime}
                  name='endTime'
                  label='End Time'
                  type='time'
                  placeholder=''
                  onChange={formik.handleChange}
                />

                <InputText
                  value={formik.values.date}
                  error={formik.errors.date}
                  name='date'
                  label='Date'
                  type='date'
                  onChange={formik.handleChange}
                />

                <InputText
                  value={formik.values.phone}
                  error={formik.errors.phone}
                  name='phone'
                  label='Phone'
                  placeholder=''
                  onChange={formik.handleChange}
                />
                <InputText
                  value={formik.values.email}
                  error={formik.errors.email}
                  name='email'
                  label='E-mail'
                  onChange={formik.handleChange}
                />
              </div>

              <div className='flex space-x-2 justify-start mt-10'>
                <button className='btn-indigo'>
                  <span>Discard</span>
                </button>
                <button type='submit' className='btn-indigo'>
                  <span>Add Class</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewClass;
