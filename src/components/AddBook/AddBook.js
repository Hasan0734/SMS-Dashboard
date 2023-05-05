import React from 'react';
import { Formik } from 'formik';
import InputText from '../inputs/InputText';

import { addBookSchema } from '../../schema/addBookSchema';
import SelectOption from '../ui/SelectOption';

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

const AddBook = () => {
  function addStudentHandler(values, { resetForm }) {
    alert(JSON.stringify(values));
    // resetForm()
  }

  const initialValues = {
    bookName: '',
    subject: '',
    writerName: '',
    class: '',
    publishDate: '',
    uploadDate: '',
    IDNo: '',
    photo: '',
  };

  return (
    <div className='mt-5 card space-y-4'>
      <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
        <h2 className='font-semibold text-lg'>Book Information</h2>
      </div>
      <div className='p-5'>
        {/* Setup Fromik */}
        <Formik
          initialValues={initialValues}
          validationSchema={addBookSchema}
          onSubmit={addStudentHandler}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              <div className=' gap-8 grid grid-cols-3 xl:grid-cols-4'>
                <InputText
                  value={formik.values.bookName}
                  error={formik.errors.bookName}
                  name='bookName'
                  label='Book Name'
                  placeholder=''
                  onChange={formik.handleChange}
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
                  placeholder={'Select Subject'}
                  error={formik.errors.subject}
                  handleChange={formik.setFieldValue}
                  name={'subject'}
                  label={true}
                />

                <InputText
                  value={formik.values.writerName}
                  error={formik.errors.writerName}
                  name='writerName'
                  label='Writer Name'
                  placeholder=''
                  onChange={formik.handleChange}
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
                <InputText
                  value={formik.values.publishDate}
                  error={formik.errors.publishDate}
                  name='publishDate'
                  label='Publishing Year'
                  type='number'
                  placeholder=''
                  onChange={formik.handleChange}
                />

                <InputText
                  value={formik.values.uploadDate}
                  error={formik.errors.uploadDate}
                  name='uploadDate'
                  label='Upload Date'
                  type='date'
                  placeholder='dd / mm / yyyy'
                  onChange={formik.handleChange}
                />
                <InputText
                  value={formik.values.IDNo}
                  error={formik.errors.IDNo}
                  name='IDNo'
                  label='ID No'
                  placeholder=''
                  type='number'
                  onChange={formik.handleChange}
                />

                <InputText
                  value={formik.values.photo}
                  error={formik.errors.photo}
                  name='photo'
                  label='Cover Photo'
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
                  <span>Add Book</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddBook;
