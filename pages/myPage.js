import Link from 'next/link';

export default function MyPage() {
  return (
    <div className="bg-pageBG bg-cover h-screen w-screen flex flex-col justify-center items-center text-lightBlack font-aktivGrotesk text-center">
      <Link href="/main">
        <button className="w-12 h-12 absolute top-10% left-10%">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path className='fill-lightBlack' d="M3.076 5.617A1 1 0 0 1 4 5h10a7 7 0 1 1 0 14H5a1 1 0 1 1 0-2h9a5 5 0 1 0 0-10H6.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1-.217-1.09Z" /></g></svg>
        </button>
      </Link>
      <p className='text-4xl absolute top-10%'>My Score</p>
      <div className="text-16em absolute top-15%">85</div>
      <div className='w-screen absolute bottom-0
                      bg-gradient-to-t from-glassBGa to-glassBGb text-lightBlack border-t-2 border-glassL rounded-2xl shadow-glassShadow backdrop-blur-md'>
        <div className='text-2xl flex h-28'>
          <div className='border-r-4 border-mildWhite 
                          flex w-1/2 relative'>
            <p className='left-1/4 absolute top-1/2 -translate-y-1/2'>Total Score :</p>
            <p className='right-1/4 absolute top-1/2 -translate-y-1/2'>1,105</p>
          </div>
          <div className=' flex w-1/2 relative '>
            <p className='left-1/4 absolute top-1/2 -translate-y-1/2'>Received :</p>
            <p className='right-1/4 absolute top-1/2 -translate-y-1/2'>13</p>
          </div>
        </div>
        <div className="w-screen 
                        bg-mildWhite rounded-t-2xl p-7%">
          <div className='flex space-x-5% place-content-center'>
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i}>
                <div className='w-28 h-28 bg-star bg-cover'></div>
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
