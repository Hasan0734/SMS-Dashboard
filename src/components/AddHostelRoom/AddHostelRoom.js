import { Formik } from 'formik';
import React from 'react';
import InputText from '../inputs/InputText';
import SelectOption from '../ui/SelectOption';
import { addHostelRoomSchema } from '../../schema/addHostelRoomSchema';

const AddHostelRoom = () => {
  const initialValues = {
    hostelName: '',
    roomNumber: '',
    roomType: '',
    totalBed: '',
    costPerBed: '',
  };

  const addHostelRoomHandler = (values, { resetForm }) => {
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
          validationSchema={addHostelRoomSchema}
          onSubmit={addHostelRoomHandler}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              <div className='gap-8 grid grid-cols-1 sm:grid-cols-3'>
                <InputText
                  value={formik.values.hostelName}
                  error={formik.errors.hostelName}
                  name='hostelName'
                  label='Hostel Name'
                  onChange={formik.handleChange}
                />

                <InputText
                  value={formik.values.roomNumber}
                  error={formik.errors.roomNumber}
                  name='roomNumber'
                  label='Room Number'
                  onChange={formik.handleChange}
                />

                <SelectOption
                  options={[
                    { label: 'Big', value: 'BIG' },
                    { label: 'Small', value: 'SMALL' },
                    { label: 'Medium', value: 'MEDIUM' },
              
                  ]}
                  title='Room Type'
                  value={formik.values.roomType}
                  placeholder={'Select Room'}
                  error={formik.errors.roomType}
                  handleChange={formik.setFieldValue}
                  name={'roomType'}
                  label={true}
                />
                <SelectOption
                  options={[
                    { label: '01', value: '01' },
                    { label: '02', value: '02' },
                    { label: '03', value: '03' },
                    { label: '04', value: '04' },
                  ]}
                  title='Room Type'
                  value={formik.values.roomType}
                  placeholder={'Select Room'}
                  error={formik.errors.roomType}
                  handleChange={formik.setFieldValue}
                  name={'roomType'}
                  label={true}
                />

                <InputText
                  value={formik.values.costPerBed}
                  error={formik.errors.costPerBed}
                  name='costPerBed'
                  type='number'
                  label='Cost Per Bed'
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

export default AddHostelRoom;
