import Link from 'next/link';

export default function MyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <div className="text-6xl font-bold">90</div>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-3xl">
            ⭐
          </span>
        ))}
      </div>
      <Link href="/main">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Return
        </button>
      </Link>
    </div>
  );
}
