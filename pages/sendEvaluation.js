import { useState } from 'react';
import Link from 'next/link';

export default function SendEvaluation() {
  const [walletAddress, setWalletAddress] = useState('');
  const [score, setScore] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: ここで評価を送信する処理を実装
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 ">
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div>
          <label
            htmlFor="score"
            className="block text-sm font-medium text-gray-700"
          >
            Score
          </label>
          <input
            id="score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>
      <Link href="/main">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Return
        </button>
      </Link>
    </div>
  );
}
``;
