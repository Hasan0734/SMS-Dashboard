import React from 'react'
import AddProductBasicInfo from './AddProductBasicInfo'
import AddProductImage from './AddProductImage'
import AddProductPricingInfo from './AddProductPricingInfo'
import AddProductOrganizationInfo from './AddProductOrganizationInfo'
import { Formik } from 'formik'
import { createProductSchema } from '../../schema/productSchema'

const AddProduct = () => {
  // Add Product Handler
  function addProductHandler(values, { resetForm }) {
    console.log(values)
    // resetForm()
  }

  return (
    <div className='mt-5 p-4 space-y-4'>
      {/* Add Product Header */}
      <div>
        <h2 className='text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl'>
          Add New Product
        </h2>
      </div>

      {/* Setup Fromik */}
      <Formik
        initialValues={{ images: [], description: '' }}
        validationSchema={createProductSchema}
        onSubmit={addProductHandler}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className='grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-4'
          >
            <div className='col-span-2 lg:col-span-2 '>
              <AddProductBasicInfo formik={formik} />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <AddProductImage formik={formik} />
            </div>
            <div className='col-span-2 lg:col-span-2'>
              <AddProductPricingInfo formik={formik} />
            </div>
            <div className='col-span-2 lg:col-span-2'>
              <AddProductOrganizationInfo formik={formik} />
            </div>
            <div className='col-span-3 flex space-x-2 justify-end'>
              <button className='btn-indigo'>
                <span>Discard</span>
              </button>
              <button type='submit' className='btn-indigo-active'>
                <span>Add Product</span>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddProduct
