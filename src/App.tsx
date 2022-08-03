import React from 'react'
import Currency from './components/Currency'

export default function App(): JSX.Element {
  return (
    <div className='container my-12'>
      <div className='flex flex-col '>
        <Currency />
      </div>
    </div>
  )
}
