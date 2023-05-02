import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import { useLocation } from 'react-router-dom'
import LinkedDeivces from './LinkedDeivces'
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import UpdatePassword from './UpdatePassword'

const Profile = () => {
  const search = useLocation().search
  const component = new URLSearchParams(search).get('tab')

  const renderSection = (params) => {
    switch (params) {
      case 'update_profile':
        return <UpdateProfile />
      case 'update_password':
        return <UpdatePassword />
      case 'linked_devices':
        return <LinkedDeivces />
      default:
        return <UpdateProfile />
    }
  }
  return (
    <div className='grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-4 lg:mt-6'>
      <div className='col-span-12 lg:col-span-4'>
        <ProfileSidebar />
      </div>
      <div className='col-span-12 lg:col-span-8'>
        {renderSection(component)}
      </div>
    </div>
  )
}

export default Profile
