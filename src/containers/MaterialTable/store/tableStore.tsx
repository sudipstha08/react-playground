'use client'

import { createCtx } from '@/store'
import React, { useState } from 'react'

interface TableContext {
  isLoading: boolean
  setIsLoading?: (isLoading: boolean) => void
}

const [useContext, CtxProvider] = createCtx<TableContext>()

type Props = {
  children: React.ReactNode
}

const TableContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <CtxProvider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CtxProvider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { TableContextProvider, useContext as useTableContext }
