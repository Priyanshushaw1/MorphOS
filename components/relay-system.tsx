import { Network, Shield, Zap, RefreshCw, Lock, Globe } from "lucide-react"

export default function RelaySystem() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The MorphOS Relay System</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          At the core of MorphOS is our advanced relay system - a decentralized network of validator nodes that process,
          verify, and relay blockchain transactions with unprecedented security and efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Network className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Decentralized Architecture</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Our relay network consists of geographically distributed nodes, eliminating single points of failure
                  and ensuring system availability even if individual nodes go offline.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Multi-layer Security</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Each transaction is verified by multiple relay nodes using our consensus algorithm, preventing
                  fraudulent transactions and ensuring data integrity throughout the process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">High Performance</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Our relay system processes transactions in parallel, achieving throughput rates significantly higher
                  than traditional blockchain networks while maintaining security guarantees.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Adaptive Routing</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Transactions are intelligently routed through the network based on real-time conditions, optimizing
                  for speed, cost, and reliability depending on user preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Privacy Preservation</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Our relay system incorporates advanced cryptographic techniques to protect user privacy while still
                  maintaining the transparency benefits of blockchain technology.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Cross-chain Compatibility</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  The relay system is designed to work across multiple blockchain networks, facilitating
                  interoperability and enabling seamless cross-chain transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Technical Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Consensus Protocol</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Modified Practical Byzantine Fault Tolerance (PBFT) with AI-enhanced validator selection
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Transaction Throughput</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Up to 10,000 transactions per second with sub-second finality
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Network Topology</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Mesh network with dynamic node discovery and reputation-based routing
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Security Measures</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Multi-signature validation, threshold cryptography, and real-time anomaly detection
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Supported Chains</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Ethereum, Polygon, Solana, Avalanche, and all EVM-compatible networks
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Node Requirements</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Minimum 8-core CPU, 16GB RAM, 1TB SSD, and 100Mbps connection
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
