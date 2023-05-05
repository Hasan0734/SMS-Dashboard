import React from 'react';
import { Formik } from 'formik';
import InputText from '../inputs/InputText';
import { addStudentSchema } from '../../schema/admintSchema';
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

const sections = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' },
];

const AdmintForm = () => {
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
    roll: '',
    admissionNo: '',
    religion: '',
    email: '',
    studentPhoto: '',
    fatherName: '',
    motherName: '',
    fatherOccupation: '',
    motherOccupation: '',
    phone: '',
    nationality: '',
    presentAddress: '',
    permanentAddress: '',
    parentPhoto: '',
  };

  return (
    <div className='mt-5 card space-y-4'>
      <div className='border-b border-gray-200 dark:border-gray-500 p-4'>
        <h2 className='font-semibold text-lg'>Add Student Form</h2>
      </div>
      <div className='p-5'>
        {/* Setup Fromik */}
        <Formik
          initialValues={initialValues}
          validationSchema={addStudentSchema}
          onSubmit={addStudentHandler}
        >
          {(formik, errors) => (
            <form onSubmit={formik.handleSubmit} className='w-full'>
              {/* student info */}
              <div className=''>
                <h3
                  className='font-semibold text-xl relative 
              after:absolute after:w-10 after:h-1 after:bg-[#a3adc2]  after:-bottom-2 after:left-0'
                >
                  Student Information
                </h3>
                <div className=' gap-8 mt-8 grid grid-cols-3 xl:grid-cols-4'>
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

                  <SelectOption
                    options={[
                      { label: 'Male', value: 'MALE' },
                      { label: 'Female', value: 'FEMALE' },
                    ]}
                    title='Gender'
                    value={formik.values.gender}
                    placeholder={'Select Gender'}
                    error={formik.errors.gender}
                    handleChange={formik.setFieldValue}
                    name={'gender'}
                    label={true}
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
                    value={formik.values.roll}
                    error={formik.errors.roll}
                    name='roll'
                    label='Roll'
                    placeholder=''
                    type='number'
                    onChange={formik.handleChange}
                  />

                  <InputText
                    value={formik.values.admissionNo}
                    error={formik.errors.admissionNo}
                    name='admissionNo'
                    label='Admission No'
                    placeholder=''
                    type='number'
                    onChange={formik.handleChange}
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
                    value={formik.values.studentPhoto}
                    error={formik.errors.studentPhoto}
                    name='studentPhoto'
                    label='Student Photo (150px X 150px)'
                    placeholder=''
                    type={'file'}
                    onChange={formik.handleChange}
                    accept='image/png, image/jpeg, image/jpg'
                  />
                </div>
              </div>
              {/* parent info */}
              <div className='mt-5'>
                <h3
                  className='font-semibold text-xl relative 
              after:absolute after:w-10 after:h-1 after:bg-[#a3adc2]  after:-bottom-2 after:left-0'
                >
                  Parent Information
                </h3>
                <div className='gap-8 mt-8 grid grid-cols-3 xl:grid-cols-4 '>
                  <InputText
                    value={formik.values.fatherName}
                    error={formik.errors.fatherName}
                    name='fatherName'
                    label='Father Name'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.motherName}
                    error={formik.errors.motherName}
                    name='motherName'
                    label='Mother Name'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.fatherOccupation}
                    error={formik.errors.fatherOccupation}
                    name='fatherOccupation'
                    label='Father Occupation'
                    placeholder=''
                    onChange={formik.handleChange}
                  />

                  <InputText
                    value={formik.values.motherOccupation}
                    error={formik.errors.motherOccupation}
                    name='motherOccupation'
                    label='Mother Occupation'
                    onChange={formik.handleChange}
                    placeholder=''
                  />
                  <InputText
                    value={formik.values.phone}
                    error={formik.errors.phone}
                    name='phone'
                    label='Phone Number'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.nationality}
                    error={formik.errors.nationality}
                    name='nationality'
                    label='Nationality'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.presentAddress}
                    error={formik.errors.presentAddress}
                    name='presentAddress'
                    label='Present Address'
                    placeholder=''
                    onChange={formik.handleChange}
                  />
                  <InputText
                    value={formik.values.permanentAddress}
                    error={formik.errors.permanentAddress}
                    name='permanentAddress'
                    label='Permanent Address'
                    placeholder=''
                    onChange={formik.handleChange}
                  />

                  <InputText
                    value={formik.values.parentPhoto}
                    error={formik.errors.parentPhoto}
                    name='parentPhoto'
                    label='Parents Photo (150px X 150px)'
                    placeholder=''
                    type={'file'}
                    onChange={formik.handleChange}
                    accept='image/png, image/jpeg, image/jpg'
                  />
                </div>
              </div>

              <div className='flex space-x-2 justify-start mt-10'>
                <button className='btn-indigo'>
                  <span>Discard</span>
                </button>
                <button type='submit' className='btn-indigo'>
                  <span>Add Student</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdmintForm;
