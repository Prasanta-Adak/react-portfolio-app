import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
      <div className='flex gap-5 text-6xl font-semibold sm:text-3xl'>
      <h1 className="text-secondary s">S</h1>
      <h1 className="text-white d">D</h1>
      <h1 className="text-tertiary a">S</h1>
    </div>
    </div>
  )
}

export default Loader
