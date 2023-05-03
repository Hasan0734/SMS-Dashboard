import React from 'react';
import { Formik } from 'formik';
import InputText from '../inputs/InputText';

import ListboxSelect from '../ui/ListboxSelect';
import { addTeacherSchema } from '../../schema/addTeacherSchema';

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

const AddTeacher = () => {
  function addStudentHandler(values, { resetForm }) {
    alert(JSON.stringify(values));
    // resetForm()
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    class: '',
    section: '',
    gender: '',
    DOB: '',
    id: '',
    subject: '',
    religion: '',
    email: '',
    phone: '',
    address: '',
    photo: '',
  };

  return (
    <div className='mt-5 card space-y-4'>
      <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
        <h2 className='font-semibold text-lg'>Teacher Information</h2>
      </div>
      <div className='p-5'>
        {/* Setup Fromik */}
        <Formik
          initialValues={initialValues}
            validationSchema={addTeacherSchema}
          onSubmit={addStudentHandler}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
        
                <div className=' gap-8 grid grid-cols-3 xl:grid-cols-4'>
                  <InputText
                    value={formik.values.firstName}
                    error={formik.errors.firstName}
                    name='firstName'
                    label='First Name'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.lastName}
                    error={formik.errors.lastName}
                    name='lastName'
                    label='Last Name'
                    placeholder=''
                    onChange={formik.handleChange}
                  />

                  <ListboxSelect
                    options={classes}
                    label='Class'
                    handleChange={formik.setFieldValue}
                    value={formik.values.class}
                    name='class'
                    error={formik.errors.class}
                    placeholder='Please Select Class'
                  />
                  <ListboxSelect
                    options={sections}
                    label='Section'
                    handleChange={formik.setFieldValue}
                    value={formik.values.section}
                    name='section'
                    error={formik.errors.section}
                    placeholder='Please Select Section'
                  />

                  <ListboxSelect
                    options={[
                      { label: 'Male', value: 'MALE' },
                      { label: 'Female', value: 'FEMALE' },
                    ]}
                    label='Gender'
                    handleChange={formik.setFieldValue}
                    value={formik.values.gender}
                    name='gender'
                    error={formik.errors.gender}
                    placeholder='Please Select Gender'
                  />

                  <InputText
                    value={formik.values.DOB}
                    error={formik.errors.DOB}
                    name='DOB'
                    label='Date of Birth'
                    type='date'
                    placeholder='dd / mm / yyyy'
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.id}
                    error={formik.errors.id}
                    name='id'
                    label='ID No'
                    placeholder=''
                    type='number'
                    onChange={formik.handleChange}
                  />

                  <ListboxSelect
                    options={[
                      { label: 'Math', value: 'MATH' },
                      { label: 'English', value: 'ENGLISH' },
                      { label: 'BANGLA', value: 'BANGLA' },
                      { label: 'Science', value: 'SCIENCE' },
                    ]}
                    label='Subject'
                    handleChange={formik.setFieldValue}
                    value={formik.values.subject}
                    name='subject'
                    error={formik.errors.subject}
                    placeholder='Please Select Subject'
                  />

                  <InputText
                    value={formik.values.religion}
                    error={formik.errors.religion}
                    name='religion'
                    label='Religion'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.email}
                    error={formik.errors.email}
                    name='email'
                    label='E-mail'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.phone}
                    error={formik.errors.phone}
                    name='phone'
                    label='Phone No'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.address}
                    error={formik.errors.address}
                    name='address'
                    label='Address'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.photo}
                    error={formik.errors.photo}
                    name='photo'
                    label='Teacher Photo (150px X 150px)'
                    placeholder=''
                    type={'file'}
                    onChange={formik.handleChange}
                    accept='image/png, image/jpeg, image/jpg'
                  />
                </div>

              <div className='flex space-x-2 justify-start mt-10'>
                <button className='btn-indigo'>
                  <span>Discard</span>
                </button>
                <button type='submit' className='btn-indigo'>
                  <span>Add Teacher</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddTeacher;
