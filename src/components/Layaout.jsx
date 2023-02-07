import { Outlet } from 'react-router-dom'

function Layaout (props) {
  return (
    <div className='flex min-h-screen'>
      <div className='w-1/4 bg-blue-900' />
      <div className='w-3/4' />
    </div>
  )
}

export default Layaout
