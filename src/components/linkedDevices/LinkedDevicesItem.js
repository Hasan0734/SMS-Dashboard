import moment from 'moment/moment'
import React from 'react'
import { useDeactivateSessionMutation } from '../../features/auth/authApi'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'

const LinkedDevicesItem = ({ device, index }) => {
  const { user } = useSelector((state) => state.auth)
  const [deactivateSession, { isSuccess, isError }] =
    useDeactivateSessionMutation()

  function removeDeviceHandler() {
    deactivateSession({
      userId: user?._id,
      sessionId: device?._id,
    })
  }

  React.useEffect(() => {
    if (isSuccess) toast.success('Device Removed!')
    if (isError) toast.error('Failed To Remove Device!')
  }, [isSuccess, isError])

  return (
    <tr>
      <td className='whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
        {index + 1}
      </td>
      <td className='whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
        {device.userAgent}
      </td>
      <td className='whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
        {moment(device.updatedAt).fromNow()}
      </td>
      <td className='whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
        <button onClick={removeDeviceHandler} className='btn btn-error'>
          Remove
        </button>
      </td>
    </tr>
  )
}

export default LinkedDevicesItem
