import React from 'react'

const Header = ({title, subtitle}: {title: string, subtitle?: string}) => {
  return (
    <>
      <h2 className='h2-bold relative inline-block'>
        {title}
        <span className='absolute left-0 bottom-[-10px] h-[6px] w-[75%] bg-[#98648e]'></span>
      </h2>
      {subtitle && <p className='p-16-regular mt-4'>{subtitle}</p>}
    </>
  )
}

export default Header