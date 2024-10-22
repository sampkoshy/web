import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1  className='text-2xl'>Hello <br/> <span className='text-3xl font-semibold'> sam</span></h1>
        <button className='bg-red-500 font-medium text-white px-5 py2 rounded-sm'>LOG OUT</button>
    </div>
  )
}

export default Header