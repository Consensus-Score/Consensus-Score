import Link from 'next/link';

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Link href="/myPage">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          My Page aaaaaa
        </button>
      </Link>
      <Link href="/sendEvaluation">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send an Evaluation
        </button>
      </Link>
      <Link href="/verification">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Verification
        </button>
      </Link>
    </div>
  );
}
