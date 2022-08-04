import React from 'react'

interface Props {
  heading: string
  children: JSX.Element | JSX.Element[]
  column?: boolean
}

export default function InfoBlock({
  heading,
  children,
  column,
}: Props): JSX.Element {
  return (
    <div className='flex flex-col bg-white rounded-md p-4 shadow-md m-2 sm:w-full lg:w-fit'>
      <h1>{heading}</h1>
      <div className={`flex ${column ? 'flex-col' : ''}`}>{children}</div>
    </div>
  )
}
