import React from 'react'

interface Props {
  textAbove: string
  textBelow: string
}

export default function Arrow({ textAbove, textBelow }: Props): JSX.Element {
  return (
    <div className='h-fit flex flex-col flex-grow items-center'>
      <span className='opacity-60'>{textAbove}</span>
      <div className='flex w-full justify-center items-center'>
        <hr className='my-2 w-5/6 border-t-gray-400' />
        <i className='border-r border-b inline-block w-3 h-3 -translate-x-3 -rotate-45 border-gray-400' />
      </div>
      <span className='opacity-60'>{textBelow}</span>
    </div>
  )
}
