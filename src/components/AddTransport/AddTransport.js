import { Formik } from 'formik';
import React from 'react';
import InputText from '../inputs/InputText';
import { addTransportSchema } from '../../schema/addTransportSchema';


const AddTransport = () => {
  const initialValues = {
    routeName: '',
    vechileNumber: '',
    driverName: '',
    licenseNumber: '',
    phone: '',
  };

  const addTransportHandler = (values, { resetForm }) => {
    alert(JSON.stringify(values));
    // resetForm()
  };

  return (
    <div className='mt-5 card space-y-4'>
      <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
        <h2 className='font-semibold text-lg'>Add New Transport</h2>
      </div>
      <div className='p-5'>
        {/* Setup Fromik */}
        <Formik
          initialValues={initialValues}
          validationSchema={addTransportSchema}
          onSubmit={addTransportHandler}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              <div className='gap-8 grid grid-cols-1 sm:grid-cols-3'>
                <InputText
                  value={formik.values.routeName}
                  error={formik.errors.routeName}
                  name='routeName'
                  label='Route Name'
                  onChange={formik.handleChange}
                />

                <InputText
                  value={formik.values.vechileNumber}
                  error={formik.errors.vechileNumber}
                  name='vechileNumber'
                  label='Vechile Number'             
                  onChange={formik.handleChange}
                />

                <InputText
                  value={formik.values.driverName}
                  error={formik.errors.driverName}
                  name='driverName'
                  label='Driver Number'
                  onChange={formik.handleChange}
                />
                <InputText
                  value={formik.values.licenseNumber}
                  error={formik.errors.licenseNumber}
                  name='licenseNumber'
                  label='License Number'
                  onChange={formik.handleChange}
                />
                <InputText
                  value={formik.values.phone}
                  error={formik.errors.phone}
                  name='phone'
                  label='Phone Number'
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

export default AddTransport;
