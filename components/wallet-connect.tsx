"use client"

import { useState, useEffect } from "react"
import { Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WalletConnectProps {
  showLabel?: boolean
}

export default function WalletConnect({ showLabel = false }: WalletConnectProps) {
  const [account, setAccount] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true)

  useEffect(() => {
    // Check if MetaMask is installed
    const checkMetaMaskInstalled = () => {
      const { ethereum } = window as any
      if (!ethereum || !ethereum.isMetaMask) {
        setIsMetaMaskInstalled(false)
        return false
      }
      return true
    }

    // Check if already connected
    const checkConnection = async () => {
      if (!checkMetaMaskInstalled()) return

      try {
        const { ethereum } = window as any
        const accounts = await ethereum.request({ method: "eth_accounts" })

        if (accounts.length > 0) {
          setAccount(accounts[0])
        }
      } catch (err) {
        console.error("Error checking connection:", err)
      }
    }

    checkConnection()

    // Listen for account changes
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        setAccount(null)
      } else {
        setAccount(accounts[0])
      }
    }

    const { ethereum } = window as any
    if (ethereum && ethereum.isMetaMask) {
      ethereum.on("accountsChanged", handleAccountsChanged)
    }

    return () => {
      if (ethereum && ethereum.isMetaMask) {
        ethereum.removeListener("accountsChanged", handleAccountsChanged)
      }
    }
  }, [])

  const connectWallet = async () => {
    setIsConnecting(true)
    setError(null)

    try {
      const { ethereum } = window as any
      if (!ethereum || !ethereum.isMetaMask) {
        setError("MetaMask is not installed. Please install MetaMask to continue.")
        setIsConnecting(false)
        return
      }

      // Request account access
      const accounts = await ethereum.request({ method: "eth_requestAccounts" })
      setAccount(accounts[0])

      // Check if we're on the Educhain testnet, if not, prompt to add it
      const chainId = await ethereum.request({ method: "eth_chainId" })

      // This is a placeholder for the Educhain testnet chain ID
      // Replace with the actual chain ID for your testnet
      const educhainChainId = "0x539" // This is 1337 in decimal, replace with your actual chain ID

      if (chainId !== educhainChainId) {
        try {
          // Try to switch to the Educhain testnet
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: educhainChainId }],
          })
        } catch (switchError: any) {
          // This error code indicates that the chain has not been added to MetaMask
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: educhainChainId,
                    chainName: "Educhain Testnet",
                    nativeCurrency: {
                      name: "EDU",
                      symbol: "EDU",
                      decimals: 18,
                    },
                    rpcUrls: ["https://educhain-testnet.example.com"], // Replace with actual RPC URL
                    blockExplorerUrls: ["https://explorer.educhain-testnet.example.com"], // Replace with actual explorer URL
                  },
                ],
              })
            } catch (addError) {
              setError("Failed to add Educhain network to MetaMask")
            }
          } else {
            setError("Failed to switch to Educhain network")
          }
        }
      }
    } catch (err: any) {
      if (err.code === 4001) {
        // User rejected the request
        setError("Please connect to MetaMask to continue.")
      } else {
        setError("Failed to connect to MetaMask. Please try again.")
        console.error(err)
      }
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
  }

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
  }

  if (!isMetaMaskInstalled) {
    return (
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => window.open("https://metamask.io/download/", "_blank")}
      >
        <Wallet className="h-5 w-5" />
        {showLabel && "Install MetaMask"}
        {!showLabel && "Install"}
      </Button>
    )
  }

  if (account) {
    return (
      <div className="flex flex-col gap-2">
        <Button variant="outline" className="flex items-center gap-2" onClick={disconnectWallet}>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span>{formatAddress(account)}</span>
        </Button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline" className="flex items-center gap-2" onClick={connectWallet} disabled={isConnecting}>
        <Wallet className="h-5 w-5" />
        {isConnecting ? "Connecting..." : showLabel ? "Connect Wallet" : "Connect"}
      </Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}
