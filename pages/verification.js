import { useState } from 'react';
import Link from 'next/link';

const { groth16 } = require('snarkjs');

export default function Verification() {
  const [walletAddress, setWalletAddress] = useState('');
  const [verified, setVerified] = useState(false);
  // proof
  const [proof, setProof] = useState(null);
  const [score, setScore] = useState(null);

  async function handleVerification() {
    console.log('groth16 : ', groth16);
    if (typeof groth16 === 'undefined') {
      return;
    }
    console.log('groth16 : ', groth16);
    const { proof, publicSignals } = await groth16.fullProve(
      { totalScore: 100, totalEvaluater: 5 },
      '/circuits/circuit.wasm',
      '/circuits/circuit_final.zkey'
    );

    setProof(JSON.stringify(proof, null, 1));

    const response = await fetch('/circuits/verification_key.json');
    const vKey = await response.json();

    const res = await groth16.verify(vKey, publicSignals, proof);

    setVerified(res);
    console.log('検証完了！', proof);
    console.log('publicSignals : ', publicSignals);
    setScore(publicSignals[1]);
    console.log(score);
  }

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
      {verified ? (
        <div className="flex space-x-2">
          {Array.from({ length: score }, (_, i) => (
            <span key={i} className="text-3xl">
              ⭐
            </span>
          ))}
        </div>
      ) : (
        <div className="flex space-x-2">
          <p>検証できていません</p>
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
