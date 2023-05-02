import React from 'react'
import ProductListHeader from './ProductListHeader'
import ProductListTable from './ProductListTable'
import ProductListTableFooter from './ProductListTableFooter'

const ProductList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <ProductListHeader />
      <ProductListTable />
      <ProductListTableFooter />
    </div>
  )
}

export default ProductList
