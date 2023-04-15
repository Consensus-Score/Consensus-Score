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
    <div className="bg-pageBG bg-cover h-screen w-screen flex flex-col justify-center items-center text-lightBlack font-aktivGrotesk text-center">
      <div className='h-76% w-76% relative
                      bg-gradient-to-t from-glassBGa to-glassBGb text-lightBlack border-2 border-glassL rounded-2xl shadow-glassShadow backdrop-blur-md'>
        <Link href="/main">
          <button className="w-12 h-12 absolute top-8 left-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path className='fill-lightBlack' d="M3.076 5.617A1 1 0 0 1 4 5h10a7 7 0 1 1 0 14H5a1 1 0 1 1 0-2h9a5 5 0 1 0 0-10H6.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1-.217-1.09Z" /></g></svg>
          </button>
        </Link>
        <form onSubmit={handleSubmit}
              className="px-15% py-7.7%
                      flex flex-col items-center">
          <p className='text-4xl top-10%'>Send an evaluation</p>
          <div className='absolute top-30%'>
            <label
              htmlFor="walletAddress"
              className="block text-left text-xl"
            >
              Address
            </label>
            <dev className="relative px-5 py-2.5 border-b-2 border-white flex">
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="#8688AC50" d="M12 13c2.396 0 4.575.694 6.178 1.671c.8.49 1.484 1.065 1.978 1.69c.486.616.844 1.352.844 2.139c0 .845-.411 1.511-1.003 1.986c-.56.45-1.299.748-2.084.956c-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C7.425 13.694 9.605 13 12 13Zm0-11a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z" /></g></svg>
              </span>
              <input
                id="walletAddress"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="placeholder:text-form
                            focus:ring-0 focus:outline-none
                            block bg-transparent w-full py-2 pl-9 pr-3"
                placeholder='Enter Address'
              />
            </dev>
          </div>
          <div className='absolute top-55%'>
            <label
              htmlFor="score"
              className="block text-left text-xl"
            >
              Score
            </label>
            <dev className="relative px-5 py-2.5 border-b-2 border-white flex">
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="#8688AC50" d="M12 2v6.5a1.5 1.5 0 0 0 1.5 1.5H20v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6Zm1.591 11.657l-2.475 2.475l-.707-.707a1 1 0 0 0-1.414 1.414l1.343 1.344a1.1 1.1 0 0 0 1.556 0l3.111-3.112a1 1 0 1 0-1.414-1.414ZM14 2.043a2 2 0 0 1 1 .543L19.414 7a2 2 0 0 1 .543 1H14V2.043Z" /></g></svg>
              </span>
              <input
                id="score"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="placeholder:text-form
                          focus:ring-0 focus:outline-none
                          block bg-transparent w-full py-2 pl-9 pr-3"
                placeholder='Enter Score'
              />
            </dev>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-sendBGa to-sendBGb text-white rounded-2xl
                        w-70% h-75 text-2xl
                        absolute bottom-10%"
          >
            {loading ? 'Loading...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
``;
