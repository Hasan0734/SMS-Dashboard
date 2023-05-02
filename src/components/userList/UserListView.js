import React from 'react'
import UserListTable from './UserListTable'
import UserListTableFooter from './UserListTableFooter'

const UserListView = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <UserListTable />
      <UserListTableFooter />
    </div>
  )
}

export default UserListView
