import React from 'react'
import { CurrencyButton } from './components/CurrencyButton'
import InfoBlock from './components/InfoBlock'
import TransferCheckbox from './components/TransferCheckbox'

export default function App(): JSX.Element {
  return (
    <div className='container my-12'>
      <div className='flex flex-col '>
        <InfoBlock heading='Валюта'>
          <CurrencyButton type='rub' />
          <CurrencyButton type='usd' />
          <CurrencyButton type='eur' />
        </InfoBlock>
        <InfoBlock heading='Количество пересадок' column>
          <TransferCheckbox transfersNum='all' />
          <TransferCheckbox transfersNum={0} />
          <TransferCheckbox transfersNum={1} />
          <TransferCheckbox transfersNum={2} />
          <TransferCheckbox transfersNum={3} />
        </InfoBlock>
      </div>
    </div>
  )
}
