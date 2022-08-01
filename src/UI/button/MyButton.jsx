import React from 'react'

const MyButton = ({children , ...props}) => {
  return (
    <div className='w-full text-end'>
      <button {...props} className='btn btn-primary'>
        {children}
    </button>
    </div>
  )
}

export default MyButton