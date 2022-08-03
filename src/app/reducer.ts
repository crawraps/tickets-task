import { AnyAction } from '@reduxjs/toolkit'

export type SortType = 'expensiveFirst' | 'expensiveLast'
export type Currency = 'rub' | 'usd' | 'eur'
export type Transfers = 'all' | 1 | 2 | 3

interface State {
  sorting: SortType
  displayingCurrency: Currency
  transfers: Transfers
}

const defaultState: State = {
  sorting: 'expensiveLast',
  displayingCurrency: 'usd',
  transfers: 'all',
}

export default function reducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case 'setSortType':
      return { ...state, sorting: action.payload } as State
    case 'setCurrency':
      return { ...state, displayingCurrency: action.payload } as State
    case 'setTransfers':
      return { ...state, tranfers: action.payload } as State
  }
}

export function setSortType(type: SortType): AnyAction {
  return { type: 'setSortType', payload: type }
}
export function setCurrency(currency: Currency): AnyAction {
  return { type: 'setCurrency', payload: currency }
}
export function setTransfers(transfers: Transfers): AnyAction {
  return { type: 'setTransfers', payload: transfers }
}
