import { Formik } from 'formik';
import React from 'react';
import InputText from '../inputs/InputText';
import SelectOption from '../ui/SelectOption';
import { addSubjectSchema } from '../../schema/addSubjectSchema';

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

const AddSubjectForm = () => {
  const initialValues = {
    subjectName: '',
    subjectType: '',
    class: '',
    subjectCode: '',
  };

  const addSubjectHandler = (values, { resetForm }) => {
    alert(JSON.stringify(values));
    // resetForm()
  };

  return (
    <div className='card p-4 w-full xl:w-[450px]'>
      <div className='border-b border-gray-200 dark:border-gray-500 pb-4'>
        <h2 className='font-semibold text-lg'>Create A New Subject</h2>
      </div>
      <div className='mt-4'>
        {/* Setup Fromik */}
        <Formik
          initialValues={initialValues}
            validationSchema={addSubjectSchema}
          onSubmit={addSubjectHandler}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              <div className='gap-5 grid grid-cols-1'>
                <InputText
                  value={formik.values.subjectName}
                  error={formik.errors.subjectName}
                  name='subjectName'
                  label='Subject Name'
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
                  title='Class'
                  value={formik.values.class}
                  placeholder={'Please Select Class'}
                  error={formik.errors.class}
                  handleChange={formik.setFieldValue}
                  name={'class'}
                  label={true}
                />

                <InputText
                  value={formik.values.subjectCode}
                  error={formik.errors.subjectCode}
                  name='subjectCode'
                  label='Subject Code'
                  placeholder=''
                  onChange={formik.handleChange}
                />
              </div>

              <div className='flex space-x-2 justify-center  mt-7'>
                <button
                  type='submit'
                  className='btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
                >
                  <span>Submit</span>
                </button>
                <button
                  type='button'
                  className='btn bg-slate-150 font-medium text-slate-800
                 hover:bg-slate-200 focus:bg-slate-200
                  active:bg-slate-200/80 
                  dark:bg-navy-500 dark:text-navy-50
                   dark:hover:bg-navy-450 dark:focus:bg-navy-450
                    dark:active:bg-navy-450/90'
                >
                  <span>Reset</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddSubjectForm;
