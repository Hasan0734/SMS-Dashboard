import React from 'react'
import InputText from '../inputs/InputText'

const AddProductOrganizationInfo = ({ formik }) => {
  const { handleChange, values, errors } = formik
  return (
    <div className='card p-5'>
      <h2 className='text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100 border-b border-slate-600'>
        Organizational Information
      </h2>
      <div className='grid grid-cols-1 gap-4 mt-5 lg:grid-cols-2'>
        <InputText
          value={values.category}
          error={errors.category}
          label='Category'
          name='category'
          placeholder='Enter Category'
          onChange={handleChange}
          required
        />
        <InputText
          value={values.tags}
          error={errors.tags}
          label='Tags'
          name='tags'
          placeholder='Enter Tags'
          onChange={handleChange}
          required
        />
        <InputText
          value={values.brand}
          error={errors.brand}
          label='Brand'
          name='brand'
          placeholder='Enter Brand'
          onChange={handleChange}
          required
        />
        <InputText
          value={values.vandor}
          error={errors.vandor}
          label='Vandor'
          name='vandor'
          placeholder='Enter Vandor'
          onChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

export default AddProductOrganizationInfo
