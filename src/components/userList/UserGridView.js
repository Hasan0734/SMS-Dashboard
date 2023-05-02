import React from 'react'
import { demoUsers } from '../../utils/data'
import UserGridListItem from './UserGridViewItem'

const UserGridView = () => {
  return (
    <div className='mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 (lg:grid-cols-3 lg:gap-6 xl:grid-cols-4'>
      {demoUsers.map((user) => (
        <UserGridListItem key={user._id} user={user} />
      ))}
    </div>
  )
}

export default UserGridView
