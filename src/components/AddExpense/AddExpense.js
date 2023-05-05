import React from 'react';
import InputText from '../inputs/InputText';
import { Formik } from 'formik';
import SelectOption from '../ui/SelectOption';
import { addExpenseSchema } from '../../schema/addExpenseSchema';


const formInitialValue = {
  name: '',
  ID: '',
  expenseType: '',
  amount: '',
  phone: '',
  email: '',
  status: '',
  expenseDate: '',
};

const expenseTypes = [
  { label: 'Salary', value: 'SALARY' },
  { label: 'Utility Expense', value: 'UTILITY EXPENSE' },
  { label: 'Transport', value: 'TRANSPORT' },
  { label: 'Stationary', value: 'STATIONARY' },
  { label: 'Utility', value: 'UTILITY' },
];


const AddExpense = () => {
  function addPaymentHandler(values, { resetForm }) {
    alert(JSON.stringify(values));
    // resetForm()
  }
  return (
    <div className='mt-5 card space-y-4'>
      <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
        <h2 className='font-semibold text-lg'>Add New Expense</h2>
      </div>

      <div className='p-5'>
        <Formik
          initialValues={formInitialValue}
          validationSchema={addExpenseSchema}
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
                  options={expenseTypes}
                  title='Expense Type'
                  value={formik.values.expenseType}
                  placeholder={'Select type'}
                  error={formik.errors.expenseType}
                  handleChange={formik.setFieldValue}
                  name={'expenseType'}
                  label={true}
                />
                <InputText
                  value={formik.values.amount}
                  error={formik.errors.amount}
                  name='amount'
                  label='Amount'
                  onChange={formik.handleChange}
                />
                <InputText
                  value={formik.values.phone}
                  error={formik.errors.phone}
                  name='phone'
                  label='Phone'
                  onChange={formik.handleChange}
                />
                <InputText
                  value={formik.values.email}
                  error={formik.errors.email}
                  name='email'
                  label='Email'
                  onChange={formik.handleChange}
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
                  value={formik.values.expenseDate}
                  error={formik.errors.expenseDate}
                  name='payDate'
                  label='Expense Date'
                  type='date'
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

export default AddExpense;
