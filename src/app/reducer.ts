import { AnyAction } from '@reduxjs/toolkit'
import { Ticket as ITicket } from '../components/Ticket'
import Ticket from '../tickets.json'

export type SortType = 'expensiveFirst' | 'expensiveLast'
export type Currency = 'rub' | 'usd' | 'eur'
export type Transfers = boolean[]

interface State {
  sorting: SortType
  displayingCurrency: Currency
  transfers: Transfers
  tickets: ITicket[]
}

const defaultState: State = {
  sorting: 'expensiveLast',
  displayingCurrency: 'usd',
  transfers: [false, false, false, false],
  tickets: Ticket.tickets,
}

export default function reducer(
  state = defaultState,
  action: AnyAction
): State {
  switch (action.type) {
    case 'setSortType':
      return { ...state, sorting: action.payload }
    case 'setCurrency':
      return { ...state, displayingCurrency: action.payload }
    case 'toggleTransfer':
      const transfers = [...state.transfers]
      transfers[action.payload] = !transfers[action.payload]
      return { ...state, transfers: transfers }
    case 'setAllTransfers':
      return {
        ...state,
        transfers: Array(state.transfers.length).fill(action.payload),
      }
    default:
      return state
  }
}

export function setSortType(type: SortType): AnyAction {
  return { type: 'setSortType', payload: type }
}
export function setCurrency(currency: Currency): AnyAction {
  return { type: 'setCurrency', payload: currency }
}
export function toggleTransfer(number: number): AnyAction {
  return { type: 'toggleTransfer', payload: number }
}
export function setAllTransfersFalse(): AnyAction {
  return { type: 'setAllTransfers', payload: false }
}
