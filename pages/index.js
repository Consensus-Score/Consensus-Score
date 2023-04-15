import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

export default function Home() {
  const [connecting, setConnecting] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const init = async () => {
  //     const provider = await detectEthereumProvider();
  //     if (provider) {
  //       const signer = new ethers.providers.Web3Provider(provider).getSigner();
  //       if (await signer.getAddress()) {
  //         router.push('/main');
  //       }
  //     }
  //   };
  //   init();
  // }, []);

  const connectWallet = async () => {
    setConnecting(true);
    try {
      const provider = await detectEthereumProvider();
      if (!provider) {
        console.log('Please install MetaMask!');
        return;
      }
      const accounts = await provider.request({
        method: 'eth_requestAccounts',
      });
      if (accounts.length > 0) {
        console.log(accounts[0]);
        router.push('/main');
      }
    } catch (err) {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // ユーザーが接続を拒否するとここに来ます
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    }

    // そもそもすぐにメイン画面に行く
    // const provider = await detectEthereumProvider();
    // if (provider) {
    //   try {
    //     await provider.request({ method: 'eth_requestAccounts' });
    //     const signer = new ethers.providers.Web3Provider(provider).getSigner();
    //     if (await signer.getAddress()) {
    //       router.push('/main');
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // } else {
    //   console.log('Please install MetaMask!');
    // }
    setConnecting(false);
  };
  return (
    <div className="bg-indexBG bg-cover h-screen w-screen flex flex-col place-content-center text-lightBlack font-aktivGrotesk">
      <div className='ml-36'>
        <h1 className="text-7xl">Consensus Score</h1>
        <p className="text-2xl mt-83px mb-97px">Your personalized evaluation score.<br></br>
          And a score that shows how much you are trusted.</p>
        <div>
          <button
            onClick={connectWallet}
            className="rounded-full text-2xl px-10 py-2.5 bg-lightBlack hover:bg-blue-700 text-white"
            disabled={connecting}
          >
            {connecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </div>
  );
};