import React from 'react'
import InputText from '../inputs/InputText'

const AddProductPricingInfo = ({ formik }) => {
  const { handleChange, values, errors } = formik
  return (
    <div className='card p-5'>
      <h2 className='text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100 border-b border-slate-600'>
        Pricing Information
      </h2>
      <div className='grid grid-cols-1 gap-4 mt-5 lg:grid-cols-2'>
        <InputText
          value={values.price}
          error={errors.price}
          label='Price'
          name='price'
          placeholder='0'
          onChange={handleChange}
          required
        />
        <InputText
          value={values.sku}
          error={errors.sku}
          label='SKU'
          name='sku'
          placeholder='0'
          onChange={handleChange}
          required
        />
        <InputText
          value={values.discountPrice}
          error={errors.discountPrice}
          label='Discount Price'
          name='descountPrice'
          placeholder='0'
          onChange={handleChange}
          required
        />
        <InputText
          value={values.tax}
          error={errors.tax}
          label='Tax Rate (%)'
          name='tax'
          placeholder='0'
          onChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

export default AddProductPricingInfo
