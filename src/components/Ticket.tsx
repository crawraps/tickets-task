import React from 'react'
import { useAppSelector } from '../app/hooks'
import Arrow from './Arrow'
import Dest from './Dest'

export interface Ticket {
  price: Price
  start: Dest
  end: Dest
  transfers: number
}

export interface Dest {
  date: string
  city: string
}

export interface Price {
  rub: number
  usd: number
  eur: number
}

interface Props {
  ticket: Ticket
  buy(): void
}

export default function Ticket({ ticket, buy }: Props): JSX.Element {
  const currency = useAppSelector(state => state.reducer.displayingCurrency)

  const difference = Math.round(
    Math.abs(
      new Date(ticket.end.date).getTime() -
        new Date(ticket.start.date).getTime()
    ) / 36e5
  )

  return (
    <div className='flex bg-white shadow-md hover:shadow-lg m-2 transition-shadow rounded-md flex-col sm:flex-row'>
      <div className='flex p-4 w-full sm:w-1/4 flex-row sm:flex-col'>
        <div className='image w-full h-16 bg-blue-300 rounded-sm sm:mb-2 mr-1 sm:mr-0 flex items-center justify-center'>
          picture
        </div>
        <button
          onClick={buy}
          className='w-full py-2 px-4 bg-orange-200 rounded-sm hover:bg-orange-300 ml-1 sm:ml-0 transition-colors'
        >{`Купить за ${
          ticket.price[currency]
        } ${currency.toUpperCase()}`}</button>
      </div>
      <div className='flex p-4 sm:w-3/4 items-center justify-between w-full'>
        <Dest dest={ticket.start} pos='start' />
        <Arrow
          textAbove={`${ticket.transfers} пересадок`}
          textBelow={`${difference.toString()} часов`}
        />
        <Dest dest={ticket.end} pos='end' />
      </div>
    </div>
  )
}
