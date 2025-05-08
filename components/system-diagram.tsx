"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SystemDiagram() {
  const [activeTab, setActiveTab] = useState("flow")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[400px] flex items-center justify-center">Loading diagram...</div>
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>System Architecture</CardTitle>
        <CardDescription>Visualizing the MorphOS relay system and data flow</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="flow" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="flow">Transaction Flow</TabsTrigger>
            <TabsTrigger value="relay">Relay System</TabsTrigger>
            <TabsTrigger value="ai">AI Integration</TabsTrigger>
          </TabsList>
          <TabsContent value="flow" className="mt-0">
            <div className="border rounded-md p-4 bg-white dark:bg-gray-950">
              <pre className="mermaid">
                {`
graph TD
    A[User Wallet] -->|1. Connect| B[MorphOS Interface]
    B -->|2. Request Transaction| C[Transaction Builder]
    C -->|3. Create Transaction| D[Validation Layer]
    D -->|4. Validate| E{Valid?}
    E -->|Yes| F[Relay Network]
    E -->|No| G[Error Handler]
    G -->|Return Error| B
    F -->|5. Broadcast| H[Blockchain Network]
    H -->|6. Confirm| I[Transaction Pool]
    I -->|7. Include in Block| J[Blockchain]
    J -->|8. Confirmation| B
    B -->|9. Update UI| A
                `}
              </pre>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-2">
                <strong>Transaction Flow:</strong> This diagram illustrates how transactions move through the MorphOS
                ecosystem, from wallet connection to blockchain confirmation.
              </p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>User connects their wallet to the MorphOS interface</li>
                <li>Interface requests a transaction based on user input</li>
                <li>Transaction Builder creates the appropriate transaction format</li>
                <li>Validation Layer checks transaction validity</li>
                <li>Valid transactions are sent to the Relay Network</li>
                <li>Relay Network broadcasts to the blockchain</li>
                <li>Transaction is confirmed and included in a block</li>
                <li>Confirmation is sent back to the interface</li>
                <li>UI is updated to reflect the completed transaction</li>
              </ol>
            </div>
          </TabsContent>
          <TabsContent value="relay" className="mt-0">
            <div className="border rounded-md p-4 bg-white dark:bg-gray-950">
              <pre className="mermaid">
                {`
graph TD
    A[Client Application] -->|Submit Transaction| B[Relay Entry Point]
    B -->|Load Balance| C{Select Relay}
    C -->|Route 1| D[Relay Node 1]
    C -->|Route 2| E[Relay Node 2]
    C -->|Route 3| F[Relay Node 3]
    D & E & F -->|Process| G[Validation Pool]
    G -->|Consensus Check| H{Consensus Reached?}
    H -->|Yes| I[Submit to Blockchain]
    H -->|No| J[Retry with Different Relays]
    J --> C
    I -->|Confirm| K[Transaction Finalized]
    K -->|Notify| A
                `}
              </pre>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-2">
                <strong>Relay System Architecture:</strong> The MorphOS relay system provides a decentralized approach
                to transaction submission, enhancing security and reliability.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong>Multi-node Architecture:</strong> Transactions are distributed across multiple relay nodes,
                  preventing single points of failure
                </li>
                <li>
                  <strong>Consensus Mechanism:</strong> Multiple relays validate each transaction, ensuring accuracy
                  before submission to the blockchain
                </li>
                <li>
                  <strong>Load Balancing:</strong> Intelligent routing distributes transactions based on node capacity
                  and performance
                </li>
                <li>
                  <strong>Fault Tolerance:</strong> If a relay fails, the system automatically reroutes to functioning
                  nodes
                </li>
                <li>
                  <strong>Transparency:</strong> All relay operations are logged and verifiable on the blockchain
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="ai" className="mt-0">
            <div className="border rounded-md p-4 bg-white dark:bg-gray-950">
              <pre className="mermaid">
                {`
graph TD
    A[Transaction Data] -->|Feed| B[AI Processing Layer]
    Z[External Data Sources] -->|Enrich| B
    B -->|Analyze| C{Decision Points}
    C -->|Fraud Detection| D[Risk Scoring]
    C -->|Pattern Recognition| E[Behavioral Analysis]
    C -->|Optimization| F[Gas & Route Optimization]
    D & E & F -->|Results| G[AI Action Layer]
    G -->|Block| H[Block Suspicious TX]
    G -->|Approve| I[Expedite Safe TX]
    G -->|Optimize| J[Modify TX Parameters]
    H & I & J -->|Feedback| K[Learning System]
    K -->|Update Models| B
                `}
              </pre>
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-2">
                <strong>AI Integration:</strong> MorphOS leverages artificial intelligence throughout the transaction
                lifecycle to enhance security, efficiency, and user experience.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong>Fraud Detection:</strong> AI models analyze transaction patterns to identify and prevent
                  potentially fraudulent activities
                </li>
                <li>
                  <strong>Behavioral Analysis:</strong> User transaction history is analyzed to establish normal
                  patterns and flag anomalies
                </li>
                <li>
                  <strong>Gas Optimization:</strong> AI predicts optimal gas prices and transaction timing to reduce
                  costs
                </li>
                <li>
                  <strong>Continuous Learning:</strong> The system improves over time through feedback loops and model
                  updates
                </li>
                <li>
                  <strong>Predictive Analytics:</strong> AI forecasts network congestion and suggests optimal
                  transaction timing
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
