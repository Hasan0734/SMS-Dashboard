import React from 'react'
import UserGrid from './UserGridView'
import UserListHeader from './UserListHeader'
import UserListView from './UserListView'

const UserList = () => {
  // Layout View default(grid) - enum[list,grid]
  const [view, setView] = React.useState('grid')

  return (
    <div className='mt-5'>
      <UserListHeader view={view} setView={setView} />
      {view === 'grid' ? <UserGrid /> : <UserListView />}
    </div>
  )
}

export default UserList
