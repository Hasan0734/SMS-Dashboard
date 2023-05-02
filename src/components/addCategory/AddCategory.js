import React from 'react'
import { Formik } from 'formik'
import InputText from '../inputs/InputText'
import DrugAndDropFileUpload from '../ui/DrugAndDropFileUpload'

const AddCategory = () => {
  function addCategoryHandler(values, { resetForm }) {
    alert(JSON.stringify(values))
    // resetForm()
  }

  return (
    <div className='mt-5 p-4 card'>
      {/* Add Product Header */}
      <div>
        <h2 className='text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl'>
          Add New Category
        </h2>
        <p>Add your product category and nacessary infromation form here</p>
      </div>

      {/* Setup Fromik */}
      <Formik
        initialValues={{ image: [], type: '', parent: '', child: '' }}
        // validationSchema={createProductSchema}
        onSubmit={addCategoryHandler}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className='w-full lg:w-2/3 mx-auto'
          >
            <div className='p-5 space-y-4 mt-5'>
              <div className='space-y-4'>
                <label>Category Image</label>
                <DrugAndDropFileUpload
                  fileName='image'
                  files={formik.values.image}
                  setFiles={formik.setFieldValue}
                  maxFiles={1}
                />
              </div>
              <InputText
                value={formik.values.type}
                error={formik.errors.type}
                name='type'
                label='Category Type'
                placeholder='Enter Category Type'
                onChange={formik.handleChange}
                required
              />
              <InputText
                value={formik.values.parent}
                error={formik.errors.parent}
                name='parent'
                label='Parent Category Name'
                placeholder='Enter Parent'
                onChange={formik.handleChange}
                required
              />
              <InputText
                value={formik.values.child}
                error={formik.errors.child}
                name='child'
                label='Child Category Name'
                placeholder='Enter Child'
                onChange={formik.handleChange}
                required
              />
              <div className='flex space-x-2 justify-end'>
                <button className='btn-indigo'>
                  <span>Discard</span>
                </button>
                <button type='submit' className='btn-indigo-active'>
                  <span>Add Category</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddCategory
