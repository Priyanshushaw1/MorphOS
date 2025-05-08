import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Shield, Zap, LineChart, Puzzle, Workflow } from "lucide-react"

export default function AIFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
            <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-xl">Intelligent Analysis</CardTitle>
          <CardDescription>Advanced pattern recognition for blockchain data</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Our AI models analyze transaction patterns across the blockchain to identify trends, anomalies, and
            optimization opportunities that would be impossible to detect manually.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
            <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-xl">Fraud Prevention</CardTitle>
          <CardDescription>Real-time security monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            MorphOS AI continuously monitors transactions for suspicious patterns, automatically flagging potential
            security threats and preventing fraudulent activities before they impact users.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
            <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-xl">Predictive Optimization</CardTitle>
          <CardDescription>Smart transaction routing</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Our AI predicts network congestion and gas price fluctuations, automatically optimizing transaction timing
            and parameters to reduce costs and improve confirmation times.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
            <LineChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-xl">Market Intelligence</CardTitle>
          <CardDescription>Data-driven insights</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            MorphOS AI analyzes on-chain and market data to provide actionable insights, helping users make informed
            decisions based on real-time blockchain activity and trends.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
            <Puzzle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-xl">Adaptive Learning</CardTitle>
          <CardDescription>Self-improving systems</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            Our AI models continuously learn from transaction data and outcomes, improving their accuracy and
            effectiveness over time through sophisticated machine learning algorithms.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
            <Workflow className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-xl">Smart Automation</CardTitle>
          <CardDescription>Intelligent workflow processing</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">
            MorphOS leverages AI to automate complex blockchain operations, from multi-step transactions to cross-chain
            interactions, simplifying processes that would otherwise require technical expertise.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
