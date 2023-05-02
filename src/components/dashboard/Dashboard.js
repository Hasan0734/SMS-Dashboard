import React from 'react'
import DashboardAmountCards from './DashboardAmountCards'
import DashboardHeader from './DashboardHeader'
import DashboardSalesReport from './DashboardSalesReport'
import DashboardCategories from './DashboardCategories'
import DashboardLatestOrders from './DashboardLatestOrders'
import DashboardTopSelling from './DashboardTopSelling'

const Dashboard = () => {
  return (
    <div className='py-5 lg:py-6 space-y-4'>
      {/* Dashboard Header */}
      <DashboardHeader />
      {/* Amount Card Item */}
      <DashboardAmountCards />
      {/* Sales Report & Categories Section  */}
      <div className='grid grid-cols-1 gap-2 sm:gap-4 lg:grid-cols-3 lg:gap-4'>
        <div className='lg:col-span-2'>
          <DashboardSalesReport />
        </div>
        <div className='lg:col-span-1'>
          <DashboardCategories />
        </div>
      </div>
      {/* Latest Order & Top Selling Section */}
      <div className='grid grid-cols-1 gap-2 sm:gap-4 lg:grid-cols-3 lg:gap-4'>
        <div className='lg:col-span-2'>
          <DashboardLatestOrders />
        </div>
        <div className='lg:col-span-1'>
          <DashboardTopSelling />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
