import React from 'react'
import { ConnectButton, WalletKitContext , useWalletKit} from "@mysten/wallet-kit"
import { formatAddress } from '@mysten/sui.js/utils';

const WalletConnectButton = () => {
    const { currentAccount ,isConnected} = useWalletKit(); 

    if (isConnected) {
  return (
    
    
    
    <div>is conected <ConnectButton /></div>
    
    
   

  )
    } else {
        return (
            <div><ConnectButton /></div>
        )
    }
}

export default WalletConnectButton