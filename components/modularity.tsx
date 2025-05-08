import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, GitBranch, Package, Plug, Settings, Code } from "lucide-react"

export default function Modularity() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Modular Architecture</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          MorphOS is built on a highly modular architecture that enables seamless extensibility, customization, and
          future-proofing. Our plugin-based system allows developers to extend functionality without modifying the core
          codebase.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
              <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Layered Architecture</CardTitle>
            <CardDescription>Clear separation of concerns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              MorphOS is structured in distinct layers (presentation, business logic, data access, blockchain interface)
              that can be upgraded independently without affecting other components.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
              <GitBranch className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Plugin System</CardTitle>
            <CardDescription>Extend without modifying core</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Our robust plugin architecture allows third-party developers to create extensions that seamlessly
              integrate with the platform, adding new features and capabilities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
              <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Microservices</CardTitle>
            <CardDescription>Independent service components</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              MorphOS employs a microservices architecture where each functional component runs as an independent
              service, enabling targeted scaling and resilience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
              <Plug className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Adapter Pattern</CardTitle>
            <CardDescription>Blockchain agnostic design</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Our adapter pattern implementation allows MorphOS to connect to any blockchain through standardized
              interfaces, making it easy to add support for new networks.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
              <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Configuration System</CardTitle>
            <CardDescription>Highly customizable settings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Every aspect of MorphOS can be configured through a hierarchical settings system, allowing fine-grained
              control over system behavior without code changes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>API-First Design</CardTitle>
            <CardDescription>Comprehensive API coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              All MorphOS functionality is exposed through well-documented APIs, enabling integration with external
              systems and custom front-end implementations.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Extension Points</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          MorphOS provides multiple extension points where developers can plug in custom functionality:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Transaction Processors</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Custom handlers for specific transaction types with pre and post-processing hooks
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Validation Rules</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Pluggable validation rules to enforce custom business logic and security constraints
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">AI Model Integration</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Add custom AI models for specialized transaction analysis and optimization
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">UI Components</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Custom interface elements that seamlessly integrate with the MorphOS dashboard
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Data Providers</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              External data source integrations for enhanced transaction context and analytics
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Event Handlers</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Custom reactions to system events like transaction confirmations or security alerts
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Developer Resources</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We provide comprehensive resources to help developers extend and customize MorphOS:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">SDK & Libraries</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Official SDKs in multiple languages with comprehensive documentation
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Plugin Templates</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Starter templates for common extension types to accelerate development
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Developer Portal</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Comprehensive documentation, tutorials, and API references
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
