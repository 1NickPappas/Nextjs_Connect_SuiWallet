"use client"
import './globals.css'
import { WalletKitProvider } from '@mysten/wallet-kit'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      
      <body><WalletKitProvider>{children}</WalletKitProvider></body>
      
    </html>
    
  )
}
