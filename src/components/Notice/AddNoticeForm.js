import { Formik } from 'formik';
import React from 'react';
import InputText from '../inputs/InputText';
import TextArea from '../inputs/TextArea';


const AddNoticeForm = () => {

    const initialValues = {
        title: '',
        details: '',
        postedBy: '',
        date: '',
      };
    
      const addNoticeHandler = (values, { resetForm }) => {
        alert(JSON.stringify(values));
        // resetForm()
      };

  return (
    <div className='card p-4 w-full xl:w-[450px] sticky top-20'>
      <div className='border-b border-gray-200 dark:border-gray-500 pb-4'>
        <h2 className='font-semibold text-lg'>Creat A Notice</h2>
      </div>
      <div className='mt-4'>
        {/* Setup Fromik */}
        <Formik
          initialValues={initialValues}
        //   validationSchema={addGradeSchema}
          onSubmit={addNoticeHandler}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              <div className='gap-5 grid grid-cols-1'>
                <InputText
                  value={formik.values.title}
                  error={formik.errors.title}
                  name='title'
                  label='Title'
                  onChange={formik.handleChange}
                />
                  <TextArea
                  value={formik.values.details}
                  error={formik.errors.details}
                  name='details'
                  label='Details'
                  onChange={formik.handleChange}
                />

                <InputText
                  value={formik.values.postedBy}
                  error={formik.errors.postedBy}
                  name='postedBy'
                  label='Posted By'
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

export default AddNoticeForm;
