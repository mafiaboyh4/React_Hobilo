import { Toast } from 'primereact/toast';
import { useRef, useEffect, useState } from 'react';
import { Button } from 'primereact/button';


const ConnectWallet = ({ onConnect }: { onConnect: any })=>  {

    const [WalletConnectLoading, setWalletConnectLoading] = useState(false)
    const [Account, setAccount] = useState('Connect')
    useEffect(() => {
        setInterval(() => {
            // @ts-ignore
            if (provider) {
            // @ts-ignore
            setAccount(selectedAccount)
            onConnect(true)
        }
            
        }, 1000);
    }, [])
    
    const onSelectWallet =  async () => {
        // @ts-ignore
        await Connect();
        setWalletConnectLoading(false);
        // @ts-ignore
        if (!provider) return  toast.current.show({severity:'error', summary: 'Error', detail:'Wallet not Connected !', life: 3000});
        setWalletConnectLoading(false)
    }

    return (
        <>
        <div className="wallet-connect-box">
          <h3>Your Wallet is Not Connected !</h3>
          <p>Please first Connect Your Wallet </p>
         <Button label={Account} loading={WalletConnectLoading} className="max-btn" onClick={onSelectWallet}/>
        </div>

         {/* <Button label={Account} loading={WalletConnectLoading} className="max-btn" onClick={onSelectWallet}/> */}
        </>
    )
}

export default ConnectWallet;