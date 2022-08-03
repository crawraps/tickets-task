import React, { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setAllTransfersFalse, toggleTransfer } from '../app/reducer'

interface Props {
  transfersNum: number | 'all'
}

export default function TransferCheckbox({ transfersNum }: Props): JSX.Element {
  const dispatch = useAppDispatch()
  const transfers = useAppSelector(state => state.reducer.transfers)

  const isChecked: boolean = React.useMemo(() => {
    if (!transfers.reduce((p, n) => p || n, false) && transfersNum === 'all')
      return true
    if (transfersNum !== 'all' && transfers[transfersNum]) return true
    return false
  }, [transfers, transfersNum])

  const label: string = React.useMemo(() => {
    if (transfersNum === 'all') return 'Все'
    if (transfersNum === 0) return 'Нет пересадок'
    return `${transfersNum} пересадок`
  }, [transfersNum])

  const chancheHandler = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (transfersNum === 'all') return dispatch(setAllTransfersFalse())
      return dispatch(toggleTransfer(transfersNum))
    },
    [transfersNum]
  )

  return (
    <div className='flex p-1'>
      <label
        className={`before:content-[' '] before:block before:w-4 before:h-4 before:mr-2 flex items-center before:border-2 before:border-blue-200 before:rounded-sm before:hover:bg-blue-50 cursor-pointer ${
          isChecked ? 'before:bg-blue-300 hover:before:bg-blue-300' : ''
        }`}
        htmlFor={`transfer-checkbox-${transfersNum}`}
      >
        {label}
      </label>
      <input
        className='hidden'
        type='checkbox'
        id={`transfer-checkbox-${transfersNum}`}
        checked={isChecked}
        onChange={chancheHandler}
      />
    </div>
  )
}
