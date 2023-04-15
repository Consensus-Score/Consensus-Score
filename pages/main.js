import Link from 'next/link';

export default function Main() {
  return (
    <div className="bg-pageBG bg-cover h-screen w-screen flex flex-col justify-center items-center text-lightBlack font-aktivGrotesk text-center">
      <h2 className='text-4xl mb-7%'>What do you do?</h2>
      <div className='font-bold text-2xl'>
        <Link href="/myPage">
          <button className="bg-gradient-to-t from-glassBGa to-glassBGb text-lightBlack border-2 border-glassL m-8 rounded-2xl shadow-glassShadow backdrop-blur-md">
            <div className='w-262 h-262 m-50 bg-icon01 bg-cover' />
            <div className='w-262 h-112 m-50 relative'>
              <p className='whitespace-nowrap absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>My Page<br></br>&<br></br>Update Score</p>
            </div>
          </button>
        </Link>
        <Link href="/sendEvaluation">
          <button className="bg-gradient-to-t from-glassBGa to-glassBGb text-lightBlack border-2 border-glassL m-8 rounded-2xl shadow-glassShadow backdrop-blur-md">
            <div className='w-262 h-262 m-50 bg-icon02 bg-cover' />
            <div className='w-262 h-112 m-50 relative'>
              <p className='whitespace-nowrap absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Send an Evaluation</p>
            </div>
          </button>
        </Link>
        <Link href="/verification">
          <button className="bg-gradient-to-t from-glassBGa to-glassBGb text-lightBlack border-2 border-glassL m-8 rounded-2xl shadow-glassShadow backdrop-blur-md">
            <div className='w-262 h-262 m-50 bg-icon03 bg-cover' />
            <div className='w-262 h-112 m-50 relative'>
              <p className='whitespace-nowrap absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>Verification</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
