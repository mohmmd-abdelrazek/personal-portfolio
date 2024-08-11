import React from 'react'

export default function SectionHeading({children}: {children: React.ReactNode}) {
  return (
    <h2 className='text-3xl sm:text-4xl font-bold mb-8 capitalize text-center tracking-tighter'>{children}</h2>
  )
}
