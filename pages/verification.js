import { useState } from 'react';
import Link from 'next/link';

export default function Verification() {
  const [walletAddress, setWalletAddress] = useState('');
  const [verified, setVerified] = useState(false);

  const handleVerification = async () => {
    // TODO: ここでウォレットアドレスの確認処理を実装
    setVerified(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <div>
        <label
          htmlFor="walletAddress"
          className="block text-sm font-medium text-gray-700"
        >
          Wallet Address
        </label>
        <input
          id="walletAddress"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="mt-1 p-2 block w-full rounded-md border-gray-300"
        />
      </div>
      <button
        onClick={handleVerification}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Verify
      </button>
      {verified && (
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="text-3xl">
              ⭐
            </span>
          ))}
        </div>
      )}
      <Link href="/main">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Return
        </button>
      </Link>
    </div>
  );
}
