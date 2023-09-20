"use client"
import { WalletConnectButton } from "@/components"
//make a function that returns a page with button at the center.. use tailwind
export default function Page() {

    return (
        
        <main>
            <h1>Connect Wallet</h1>
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
            
                test
                <WalletConnectButton />
            </div>
        </main>
        
    )
}
