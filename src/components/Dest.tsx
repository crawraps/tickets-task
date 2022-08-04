import React from 'react'
import { Dest as IDest } from './Ticket'

interface Props {
  dest: IDest
}

export default function Dest({ dest }: Props): JSX.Element {
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

  return (
    <div className='flex flex-col justify-center'>
      <span className='text-4xl'>{time}</span>
      <span className='text-md opacity-80'>{dest.city}</span>
      <span className='font-light opacity-75'>{date}</span>
    </div>
  )
}
