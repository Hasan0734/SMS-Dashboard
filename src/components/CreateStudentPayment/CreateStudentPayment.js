import React from 'react';
import InputText from '../inputs/InputText';
import { Formik } from 'formik';
import SelectOption from '../ui/SelectOption';
import { studentPaymentSchema } from '../../schema/studentPaymentSchema';

const formInitialValue = {
  name: '',
  ID: '',
  class: '',
  section: '',
  totalFee: '',
  payMethod: '',
  status: '',
  payDate: '',
};

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

const CreateStudentPayment = () => {
    
  function addPaymentHandler(values, { resetForm }) {
    alert(JSON.stringify(values));
    // resetForm()
  }
  return (
    <div className='mt-5 card space-y-4'>
      <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
        <h2 className='font-semibold text-lg'>Payment Information</h2>
      </div>

      <div className='p-5'>
        <Formik
          initialValues={formInitialValue}
            validationSchema={studentPaymentSchema}
          onSubmit={addPaymentHandler}
        >
          {(formik, errors) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              <div className=' gap-8 mt-8 grid grid-cols-3 xl:grid-cols-4'>
                <InputText
                  value={formik.values.name}
                  error={formik.errors.name}
                  name='name'
                  label='Name'
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
                  options={classes}
                  title='class'
                  value={formik.values.class}
                  placeholder={'Select Class'}
                  error={formik.errors.class}
                  handleChange={formik.setFieldValue}
                  name={'class'}
                  label={true}
                />
                <SelectOption
                  options={sections}
                  title='Section'
                  value={formik.values.section}
                  placeholder={'Select Section'}
                  error={formik.errors.section}
                  handleChange={formik.setFieldValue}
                  name={'section'}
                  label={true}
                />
                <InputText
                  value={formik.values.totalFee}
                  error={formik.errors.totalFee}
                  name='totalFee'
                  label='Total Fee'
                  onChange={formik.handleChange}
                />
                <SelectOption
                  options={[
                    { label: 'Card', value: 'CARD' },
                    { label: 'Bank', value: 'BANK' },
                    { label: 'Mobile Banking', value: 'MOBILE BANKING' },
                  ]}
                  title='Payment Method'
                  value={formik.values.payMethod}
                  placeholder={'Select Method'}
                  error={formik.errors.payMethod}
                  handleChange={formik.setFieldValue}
                  name={'payMethod'}
                  label={true}
                />
                <SelectOption
                  options={[
                    { label: 'Pending', value: 'pending' },
                    { label: 'Paid', value: 'paid' },
                    { label: 'Failed', value: 'failed' },
                    { label: 'Due', value: 'due' },
                  ]}
                  title='Status'
                  value={formik.values.status}
                  placeholder={'Select Status'}
                  error={formik.errors.status}
                  handleChange={formik.setFieldValue}
                  name={'status'}
                  label={true}
                />

                <InputText
                  value={formik.values.payDate}
                  error={formik.errors.payDate}
                  name='payDate'
                  label='Date'
                  type="date"
                  onChange={formik.handleChange}
                />
              </div>

              <div className='flex space-x-2 justify-start mt-10'>
                <button className='btn-indigo'>
                  <span>Discard</span>
                </button>
                <button type='submit' className='btn-indigo'>
                  <span>Add</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateStudentPayment;
