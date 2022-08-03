import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Currency, setCurrency } from '../app/reducer'

export interface ButtonProps {
  type: Currency
}

export function CurrencyButton({ type }: ButtonProps): JSX.Element {
  const currentType = useAppSelector(state => state.reducer?.displayingCurrency)
  const dispatch = useAppDispatch()

  return (
    <button
      className={`uppercase  p-1 rounded-sm m-1 border text-sm min-w-fit w-16 ${
        currentType === type
          ? 'bg-blue-300'
          : 'bg-transparent hover:bg-blue-100 hover:border-blue-300'
      }`}
      onClick={() => dispatch(setCurrency(type))}
    >
      {type}
    </button>
  )
}
