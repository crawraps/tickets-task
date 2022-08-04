import React from 'react'
import { useAppSelector } from './app/hooks'
import { CurrencyButton } from './components/CurrencyButton'
import InfoBlock from './components/InfoBlock'
import Ticket from './components/Ticket'
import TransferCheckbox from './components/TransferCheckbox'

export default function App(): JSX.Element {
  const tickets = useAppSelector(state => state.reducer.tickets)

  const transfers = React.useMemo(() => {
    const arr = new Array(
      Math.max(...tickets.map(ticket => ticket.transfers)) + 1
    )
      .fill(0)
      .map((_, i) => <TransferCheckbox transfersNum={i} key={i} />)
    arr.unshift(<TransferCheckbox transfersNum='all' key='all' />)
    return arr
  }, [tickets])

  return (
    <div className='container my-12 flex'>
      <div className='flex flex-col '>
        <InfoBlock heading='Валюта'>
          <CurrencyButton type='rub' />
          <CurrencyButton type='usd' />
          <CurrencyButton type='eur' />
        </InfoBlock>
        <InfoBlock heading='Количество пересадок' column>
          {transfers}
        </InfoBlock>
      </div>
      <div className='flex flex-col w-full'>
        {tickets.map(tick => (
          <Ticket
            ticket={tick}
            key={`ticket-${tick.start.date}`}
            buy={() => {}}
          />
        ))}
      </div>
    </div>
  )
}
