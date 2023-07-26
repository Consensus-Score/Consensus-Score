import { useState } from 'react';
import Link from 'next/link';
import { ethers } from 'ethers';

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
      {
        totalScore: '4642984916065208514',
        totalEvaluater: '6839710902914985989',
        encryptionKeyN: '3088115351',
        decriptionKeyLambda: '1544000052',
        decriptionKeyMu: '2629330252',
      },
      '/circuits/evaluation.wasm',
      '/circuits/circuit_final.zkey'
    );

    setProof(JSON.stringify(proof, null, 1));

    const response = await fetch('/circuits/verification_key.json');
    const vKey = await response.json();

    const res = await groth16.verify(vKey, publicSignals, proof);

    setVerified(res);
    console.log('検証完了！', proof);
    console.log('publicSignals : ', publicSignals);
    setScore(publicSignals[0]);
    console.log(score);
  }

  return (
    <div className="bg-pageBG bg-cover h-screen w-screen flex flex-col justify-center items-center text-lightBlack font-aktivGrotesk text-cente">
      <div
        className="h-76% w-76% relative
                      bg-gradient-to-t from-glassBGa to-glassBGb text-lightBlack border-2 border-glassL rounded-2xl shadow-glassShadow backdrop-blur-md"
      >
        <Link href="/main">
          <button className="w-12 h-12 absolute top-8 left-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                  className="fill-lightBlack"
                  d="M3.076 5.617A1 1 0 0 1 4 5h10a7 7 0 1 1 0 14H5a1 1 0 1 1 0-2h9a5 5 0 1 0 0-10H6.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1-.217-1.09Z"
                />
              </g>
            </svg>
          </button>
        </Link>
        <div
          className="px-15% py-7.7%
                        flex flex-col items-center"
        >
          <p className="text-4xl absolute top-10%">Verification</p>
          <div className="absolute top-30%">
            <label htmlFor="walletAddress" className="block text-left text-xl">
              Address
            </label>
            <dev className="relative px-5 py-2.5 border-b-2 border-white flex">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="#8688AC50"
                      d="M12 13c2.396 0 4.575.694 6.178 1.671c.8.49 1.484 1.065 1.978 1.69c.486.616.844 1.352.844 2.139c0 .845-.411 1.511-1.003 1.986c-.56.45-1.299.748-2.084.956c-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C7.425 13.694 9.605 13 12 13Zm0-11a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"
                    />
                  </g>
                </svg>
              </span>
              <input
                id="walletAddress"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="placeholder:text-form
                            focus:ring-0 focus:outline-none
                            block bg-transparent w-full py-2 pl-9 pr-3"
                placeholder="Enter Address"
              />
            </dev>
          </div>

          <button
            onClick={handleVerification}
            className="bg-gradient-to-r from-sendBGa to-sendBGb text-white rounded-2xl
                      w-70% h-75 text-2xl absolute top-55%"
          >
            Verify
          </button>
          <div className="absolute bottom-10%">
            {verified ? (
              <div className="flex space-x-14 place-content-center">
                {Array.from({ length: score }, (_, i) => (
                  <span
                    key={i}
                    className="w-80 h-80 bg-smallStar bg-cover"
                  ></span>
                ))}
              </div>
            ) : (
              <div>
                <p>検証されていません</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
