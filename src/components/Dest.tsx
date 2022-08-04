import React from 'react'
import { Dest as IDest } from './Ticket'

interface Props {
  dest: IDest
  pos: 'start' | 'end'
}

export default function Dest({ dest, pos }: Props): JSX.Element {
  const dateTime = new Date(dest.date)

  const timeOptions: Intl.DateTimeFormatOptions = { timeStyle: 'short' }
  const time = dateTime.toLocaleTimeString('ru-RU', timeOptions)

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  }
  const date = dateTime.toLocaleDateString('ru-RU', dateOptions)

  const addStyle = pos === 'start' ? 'text-left' : 'text-right'

  return (
    <div className='flex flex-col justify-center'>
      <span className={`text-4xl ${addStyle}`}>{time}</span>
      <span className={`text-md opacity-80 ${addStyle}`}>{dest.city}</span>
      <span className={`font-light opacity-75 ${addStyle}`}>{date}</span>
    </div>
  )
}
