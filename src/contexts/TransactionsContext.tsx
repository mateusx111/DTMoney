import { ReactNode, createContext, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  fecthTransactions: (query?: string) => Promise<void>
}

interface TransactionProviderPros {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsContextProvider({
  children,
}: TransactionProviderPros) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  async function fecthTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }
    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    fecthTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={{ transactions, fecthTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
