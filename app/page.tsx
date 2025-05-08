import Image from "next/image"
import Link from "next/link"
import { MoveUpRight, Menu, X, Moon, Sun, ArrowUp } from "lucide-react"
import WalletConnect from "@/components/wallet-connect"
import TokenDeduction from "@/components/token-deduction"
import SystemDiagram from "@/components/system-diagram"
import AIFeatures from "@/components/ai-features"
import RelaySystem from "@/components/relay-system"
import Modularity from "@/components/modularity"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold dark:text-white">MorphOS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href="#relay-system"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Relay System
            </Link>
            <Link
              href="#ai-features"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              AI Features
            </Link>
            <Link
              href="#architecture"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Architecture
            </Link>
            <Link
              href="#educhain"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Educhain
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <WalletConnect />

            <button
              id="theme-toggle"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              <Moon className="hidden dark:block w-5 h-5 text-gray-600 dark:text-gray-300" />
              <Sun className="block dark:hidden w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-button"
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden md:hidden bg-white dark:bg-gray-900 shadow-md absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <div className="flex justify-end">
              <button
                id="close-menu-button"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 pb-4">
              <Link
                href="#about"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                About
              </Link>
              <Link
                href="#relay-system"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Relay System
              </Link>
              <Link
                href="#ai-features"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                AI Features
              </Link>
              <Link
                href="#architecture"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Architecture
              </Link>
              <Link
                href="#educhain"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Educhain
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Welcome to MorphOS
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  The next-generation blockchain platform that combines AI-powered intelligence with a decentralized
                  relay system for unparalleled security, efficiency, and scalability.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#relay-system"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                  >
                    Explore Technology <MoveUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#educhain"
                    className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium border border-gray-200 dark:border-gray-700"
                  >
                    Try Demo
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/ai-blockchain-cover.png"
                  alt="AI and Blockchain Technology"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About MorphOS</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                MorphOS is a revolutionary blockchain platform that combines artificial intelligence with a
                decentralized relay system to create a more secure, efficient, and user-friendly blockchain experience.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="About our platform"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Founded in 2010, MorphOS has been at the forefront of blockchain innovation. We started with a simple
                  mission: to make blockchain technology more accessible, secure, and efficient for everyone.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our unique approach combines the power of artificial intelligence with a decentralized relay system,
                  creating a platform that can adapt to changing conditions, optimize transaction routing, and provide
                  unprecedented security guarantees.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, we continue to push boundaries and explore new possibilities in blockchain technology, always
                  with the goal of creating solutions that address real-world challenges and make blockchain accessible
                  to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Relay System Section */}
        <section id="relay-system" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Relay System</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our innovative relay system forms the backbone of MorphOS, providing unparalleled security, efficiency,
                and reliability for blockchain transactions.
              </p>
            </div>

            <RelaySystem />
          </div>
        </section>

        {/* System Architecture Diagram */}
        <section id="architecture" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">System Architecture</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore the technical architecture of MorphOS through interactive diagrams that illustrate our relay
                system, transaction flow, and AI integration.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <SystemDiagram />
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section id="ai-features" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">AI-Powered Features</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                MorphOS leverages advanced artificial intelligence to enhance every aspect of the blockchain experience,
                from security to performance optimization.
              </p>
            </div>

            <AIFeatures />
          </div>
        </section>

        {/* Modularity Section */}
        <section id="modularity" className="py-20">
          <div className="container mx-auto px-4">
            <Modularity />
          </div>
        </section>

        {/* Educhain Section */}
        <section
          id="educhain"
          className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Educhain Testnet</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experience our Educhain testnet and perform token transactions in a secure environment powered by the
                MorphOS relay system.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Connect Your Wallet</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Connect your MetaMask wallet to interact with our Educhain testnet. You can perform token
                      deductions and view your transaction history.
                    </p>
                    <div className="mb-8">
                      <WalletConnect showLabel={true} />
                    </div>
                    <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How it works</h4>
                      <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2">
                        <li>Connect your MetaMask wallet</li>
                        <li>Enter the amount of tokens to deduct</li>
                        <li>Confirm the transaction in MetaMask</li>
                        <li>Our relay system processes your transaction</li>
                        <li>AI analyzes the transaction for optimization</li>
                        <li>View your transaction in the history</li>
                      </ol>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <TokenDeduction />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have questions or ready to get started? Reach out to us using the form below.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <form id="contact-form" className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      required
                    />
                    <p id="name-error" className="text-red-500 text-sm mt-1 hidden">
                      Please enter your name
                    </p>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      required
                    />
                    <p id="email-error" className="text-red-500 text-sm mt-1 hidden">
                      Please enter a valid email address
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    required
                  />
                  <p id="subject-error" className="text-red-500 text-sm mt-1 hidden">
                    Please enter a subject
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    required
                  ></textarea>
                  <p id="message-error" className="text-red-500 text-sm mt-1 hidden">
                    Please enter your message
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium w-full md:w-auto"
                  >
                    Send Message
                  </button>
                  <p id="form-success" className="text-green-500 mt-4 hidden">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-xl font-bold">MorphOS</span>
              </div>
              <p className="text-gray-400 mb-4">Revolutionizing blockchain with AI-powered relay systems since 2010.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="GitHub">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#relay-system" className="text-gray-400 hover:text-white">
                    Relay System
                  </a>
                </li>
                <li>
                  <a href="#ai-features" className="text-gray-400 hover:text-white">
                    AI Features
                  </a>
                </li>
                <li>
                  <a href="#architecture" className="text-gray-400 hover:text-white">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="#educhain" className="text-gray-400 hover:text-white">
                    Educhain
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Web3 Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Smart Contracts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blockchain Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    AI Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="h-6 w-6 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400">123 Business Ave, City, Country</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-6 w-6 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">info@morphos.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-6 w-6 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} MorphOS. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        id="back-to-top"
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}
