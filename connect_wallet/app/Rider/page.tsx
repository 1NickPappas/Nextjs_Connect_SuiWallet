"use client"
import { WalletConnectButton } from "@/components"
import { useWalletKit , WalletKitContext} from "@mysten/wallet-kit"
import React from 'react'


const rider = () => {
    const { isConnected , } = useWalletKit();
    
    if (isConnected) {
    //when connected i  want to have three options
    //1. request ride
    //2. view ride history
    //3. view wallet balance
    let walletBalance = WalletKitContext
    console.log(walletBalance)
    
  return (
    <div>
        <h1>Rider is Connected</h1>
        <div className="flex flex-row">
        <div className="flex flex-col items-center justify-between p-24">
          <a href="./Rider/request_ride">
            <p>Request Ride</p>

          </a>
          <h1 className="text-4xl">Request Ride</h1>
        </div>
        <div className="flex flex-col items-center justify-between p-24">
          <a href=".Rider/ride_history">
            <p>View Ride History</p>
          </a>
          <h1 className="text-4xl">Ride History</h1>
        </div>
      </div>
        
        <WalletConnectButton />
        
        
        
    </div>
  )

}else{
    return (
        <div>
            <h1>Rider need to connect your wallet</h1>
            <WalletConnectButton />
        </div>
    )
}
}


export default rider