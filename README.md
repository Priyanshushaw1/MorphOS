# MorphOS Website with Blockchain Integration

A clean, responsive website template for MorphOS built with Next.js and Tailwind CSS that includes MetaMask wallet connection and Educhain testnet token deduction functionality.

## Features

- Responsive design that works on all devices
- Semantic HTML5 structure
- Modern, clean UI with consistent styling
- Dark/light mode toggle
- Mobile-friendly navigation
- Form validation
- Smooth scrolling and animations
- Back to top button
- MetaMask wallet integration
- Educhain testnet token deduction
- Transaction history

## Technical Details

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: shadcn/ui components
- **Animations**: CSS transitions and keyframes
- **Web3**: MetaMask integration for Ethereum wallet connection
- **Blockchain**: Educhain testnet integration

## How to Run

1. Clone the repository
2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/page.tsx`: Main content of the website
- `app/layout.tsx`: Root layout with theme provider and scripts
- `app/globals.css`: Global styles and animations
- `components/wallet-connect.tsx`: MetaMask wallet connection component
- `components/token-deduction.tsx`: Educhain token deduction component
- `tailwind.config.ts`: Tailwind configuration

## Blockchain Integration

### MetaMask Connection
The website includes a "Connect Wallet" button that allows users to connect their MetaMask wallet. Once connected, the user's wallet address is displayed, and they can interact with the Educhain testnet.

### Educhain Testnet
The Educhain section allows users to:
- View their token balance
- Deduct tokens from their wallet
- View transaction history
- Check transaction status

## Customization

You can easily customize this template by:

1. Changing the color scheme in `globals.css`
2. Updating the content in `page.tsx`
3. Adding new sections as needed
4. Modifying the JavaScript functionality in `layout.tsx`
5. Configuring the Educhain testnet parameters in `wallet-connect.tsx`

## Accessibility

This website is built with accessibility in mind:
- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly content

## License

This project is open source and available under the MIT License.
