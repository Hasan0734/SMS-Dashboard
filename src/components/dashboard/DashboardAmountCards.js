import React from 'react'
import { dashboardDemoAmounts } from '../../utils/data'
import DashboardAmountCardItem from './DashboardAmountCardItem'

const DashboardAmountCards = () => {
  return (
    <div class='grid grid-cols-1 gap-2 sm:gap-4 lg:grid-cols-3 lg:gap-4 mt-4'>
      {dashboardDemoAmounts.map((data, index) => (
        <DashboardAmountCardItem
          key={index}
          title={data.title}
          amount={data.amount}
          range={data.range}
          percentage={data.percentage}
        />
      ))}
    </div>
  )
}

export default DashboardAmountCards
