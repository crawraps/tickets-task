import React from 'react'

interface Props {
  heading: string
  children: JSX.Element | JSX.Element[]
}

export default function InfoBlock({ heading, children }: Props): JSX.Element {
  return (
    <div className='flex flex-col bg-white rounded-md p-4'>
      <h1>{heading}</h1>
      <div className='flex'>{children}</div>
    </div>
  )
}
