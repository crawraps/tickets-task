import React from 'react'
import { CurrencyButton } from './components/CurrencyButton'
import InfoBlock from './components/InfoBlock'

export default function App(): JSX.Element {
  return (
    <div className='container my-12'>
      <div className='flex flex-col '>
        <InfoBlock heading='Валюта'>
          <CurrencyButton type='rub' />
          <CurrencyButton type='usd' />
          <CurrencyButton type='eur' />
        </InfoBlock>
      </div>
    </div>
  )
}
