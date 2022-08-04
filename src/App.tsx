import React from 'react'
import { useAppSelector } from './app/hooks'
import { CurrencyButton } from './components/CurrencyButton'
import InfoBlock from './components/InfoBlock'
import Ticket from './components/Ticket'
import TransferCheckbox from './components/TransferCheckbox'

export default function App(): JSX.Element {
  const tickets = useAppSelector(state => state.reducer.tickets)
  const transfers = useAppSelector(state => state.reducer.transfers)

  const transferElements = React.useMemo(() => {
    const arr = new Array(
      Math.max(...tickets.map(ticket => ticket.transfers)) + 1
    )
      .fill(0)
      .map((_, i) => <TransferCheckbox transfersNum={i} key={i} />)
    arr.unshift(<TransferCheckbox transfersNum='all' key='all' />)
    return arr
  }, [tickets])

  const ticketElements = React.useMemo(() => {
    const arr = tickets.map(tick => {
      const tickElem: JSX.Element = (
        <Ticket ticket={tick} key={`${tick.start.date}`} buy={() => {}} />
      )
      if (transfers.every(el => !el)) return tickElem
      if (transfers[tick.transfers]) return tickElem
      return null
    })

    if (arr.every(el => el === null)) {
      return (
        <span className='w-full text-center text-xl mt-8'>
          Таких билетов пока нет
        </span>
      )
    }

    return arr
  }, [tickets, transfers])

  return (
    <div className='container my-12 flex flex-col lg:flex-row'>
      <div className='flex flex-col sm:flex-row lg:flex-col'>
        <InfoBlock heading='Валюта'>
          <CurrencyButton type='rub' />
          <CurrencyButton type='usd' />
          <CurrencyButton type='eur' />
        </InfoBlock>
        <InfoBlock heading='Количество пересадок' column>
          {transferElements}
        </InfoBlock>
      </div>
      <div className='flex flex-col w-full'>{ticketElements}</div>
    </div>
  )
}
