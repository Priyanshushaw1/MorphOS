"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, XCircle, Loader2 } from "lucide-react"

interface Transaction {
  id: string
  amount: string
  timestamp: number
  status: "pending" | "success" | "failed"
  hash?: string
}

export default function TokenDeduction() {
  const [amount, setAmount] = useState("")
  const [isDeducting, setIsDeducting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [balance, setBalance] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Check if wallet is connected
    const checkConnection = async () => {
      try {
        const { ethereum } = window as any
        if (ethereum && ethereum.isMetaMask) {
          const accounts = await ethereum.request({ method: "eth_accounts" })
          setIsConnected(accounts.length > 0)

          if (accounts.length > 0) {
            // Get token balance (this is a mock implementation)
            fetchBalance(accounts[0])
          }
        }
      } catch (err) {
        console.error("Error checking connection:", err)
      }
    }

    checkConnection()

    // Listen for account changes
    const handleAccountsChanged = (accounts: string[]) => {
      setIsConnected(accounts.length > 0)
      if (accounts.length > 0) {
        fetchBalance(accounts[0])
      } else {
        setBalance(null)
      }
    }

    const { ethereum } = window as any
    if (ethereum && ethereum.isMetaMask) {
      ethereum.on("accountsChanged", handleAccountsChanged)
    }

    // Load transactions from localStorage
    const savedTransactions = localStorage.getItem("morphos_transactions")
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions))
    }

    return () => {
      if (ethereum && ethereum.isMetaMask) {
        ethereum.removeListener("accountsChanged", handleAccountsChanged)
      }
    }
  }, [])

  // Mock function to fetch token balance
  const fetchBalance = async (account: string) => {
    // In a real implementation, you would call a contract method
    // This is just a mock that returns a random balance
    setBalance("1000.00")
  }

  const handleDeduction = async () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Please enter a valid amount")
      return
    }

    setIsDeducting(true)
    setError(null)
    setSuccess(null)

    try {
      const { ethereum } = window as any
      if (!ethereum || !ethereum.isMetaMask) {
        setError("MetaMask is not installed")
        setIsDeducting(false)
        return
      }

      const accounts = await ethereum.request({ method: "eth_accounts" })
      if (accounts.length === 0) {
        setError("Please connect your wallet first")
        setIsDeducting(false)
        return
      }

      // Create a new transaction
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        amount,
        timestamp: Date.now(),
        status: "pending",
      }

      // Add to transactions list
      const updatedTransactions = [newTransaction, ...transactions]
      setTransactions(updatedTransactions)
      localStorage.setItem("morphos_transactions", JSON.stringify(updatedTransactions))

      // In a real implementation, you would:
      // 1. Create a contract instance
      // 2. Call the deduction method
      // 3. Wait for the transaction to be mined

      // This is a mock implementation that simulates a blockchain transaction
      setTimeout(() => {
        // Simulate successful transaction
        const txHash = "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")

        const completedTransaction: Transaction = {
          ...newTransaction,
          status: "success",
          hash: txHash,
        }

        const finalTransactions = transactions.map((tx) => (tx.id === newTransaction.id ? completedTransaction : tx))

        setTransactions([completedTransaction, ...transactions.filter((tx) => tx.id !== newTransaction.id)])
        localStorage.setItem("morphos_transactions", JSON.stringify(finalTransactions))

        // Update balance
        if (balance) {
          const newBalance = (Number.parseFloat(balance) - Number.parseFloat(amount)).toFixed(2)
          setBalance(newBalance)
        }

        setSuccess(`Successfully deducted ${amount} EDU tokens`)
        setAmount("")
        setIsDeducting(false)
      }, 2000)
    } catch (err: any) {
      console.error("Error deducting tokens:", err)
      setError(err.message || "Failed to deduct tokens")

      // Update transaction status to failed
      const failedTransaction = transactions.find((tx) => tx.id === transactions[0]?.id)
      if (failedTransaction) {
        failedTransaction.status = "failed"
        setTransactions([...transactions])
        localStorage.setItem("morphos_transactions", JSON.stringify(transactions))
      }

      setIsDeducting(false)
    }
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Educhain Token Deduction</CardTitle>
        <CardDescription>Deduct tokens from your Educhain wallet</CardDescription>
      </CardHeader>
      <CardContent>
        {!isConnected ? (
          <div className="text-center py-4">
            <p className="text-gray-500 dark:text-gray-400 mb-4">Please connect your wallet to continue</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="amount" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Amount (EDU)
                </label>
                {balance && <span className="text-sm text-gray-500 dark:text-gray-400">Balance: {balance} EDU</span>}
              </div>
              <div className="flex gap-2">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="0.01"
                  step="0.01"
                  disabled={isDeducting}
                />
                <Button
                  onClick={handleDeduction}
                  disabled={isDeducting || !amount || Number.parseFloat(amount) <= 0}
                  className="whitespace-nowrap"
                >
                  {isDeducting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing
                    </>
                  ) : (
                    <>
                      Deduct Tokens <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
            </div>

            <div>
              <h4 className="font-medium text-sm mb-3">Transaction History</h4>
              {transactions.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm">No transactions yet</p>
              ) : (
                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          {tx.status === "pending" && <Loader2 className="h-4 w-4 text-yellow-500 animate-spin" />}
                          {tx.status === "success" && <CheckCircle className="h-4 w-4 text-green-500" />}
                          {tx.status === "failed" && <XCircle className="h-4 w-4 text-red-500" />}
                          <span className="font-medium">{tx.amount} EDU</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(tx.timestamp)}</p>
                      </div>
                      {tx.hash && (
                        <a
                          href={`https://explorer.educhain-testnet.example.com/tx/${tx.hash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Transactions on Educhain testnet are for testing purposes only
        </p>
      </CardFooter>
    </Card>
  )
}
