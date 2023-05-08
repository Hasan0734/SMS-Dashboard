import { Formik } from 'formik';
import React from 'react';
import InputText from '../inputs/InputText';
import SelectOption from '../ui/SelectOption';
import TextArea from '../inputs/TextArea';
import { addGradeSchema } from '../../schema/addGardeSchema';


const AddExamGardeForm = () => {

  const initialValues = {
    gradeName: '',
    gradePoint: '',
    percentageFrom: '',
    percentageUpto: '',
    comments: '',
  };

  const addGardeHandler = (values, { resetForm }) => {
    alert(JSON.stringify(values));
    // resetForm()
  };

  return (
    <div className='card p-4 w-full xl:w-[450px]'>
      <div className='border-b border-gray-200 dark:border-gray-500 pb-4'>
        <h2 className='font-semibold text-lg'>Add New Grades</h2>
      </div>
      <div className='mt-4'>
        {/* Setup Fromik */}
        <Formik
          initialValues={initialValues}
          validationSchema={addGradeSchema}
          onSubmit={addGardeHandler}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              <div className='gap-5 grid grid-cols-1'>
                <InputText
                  value={formik.values.gradeName}
                  error={formik.errors.gradeName}
                  name='gradeName'
                  label='Grade Name'
                  onChange={formik.handleChange}
                />

                <SelectOption
                  options={[
                    {label: '2', value: '2'},
                    {label: '3', value: '3'},
                    {label: '4', value: '4'},
                    {label: '5', value: '5'},
                  ]}
                  title='Grade Points'
                  value={formik.values.gradePoint}
                  placeholder={'Please select point'}
                  error={formik.errors.gradePoint}
                  handleChange={formik.setFieldValue}
                  name={'gradePoint'}
                  label={true}
                />
               

                <InputText
                  value={formik.values.percentageFrom}
                  error={formik.errors.percentageFrom}
                  name='percentageFrom'
                  label='Percentage From'
                  onChange={formik.handleChange}
                />
                <InputText
                  value={formik.values.percentageUpto}
                  error={formik.errors.percentageUpto}
                  name='percentageUpto'
                  label='Percentage Upto'
                  onChange={formik.handleChange}
                />
                <TextArea
                  value={formik.values.comments}
                  error={formik.errors.comments}
                  name='comments'
                  label='Comments'
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

export default AddExamGardeForm;
