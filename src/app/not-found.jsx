import Link from "next/link";


const NotFound = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <p className="text-[13px] font-mono text-gray-400 tracking-widest uppercase mb-6">
        404
      </p>

      <h1
        className="text-[80px] font-bold text-gray-900 leading-none mb-4"
        style={{ fontFamily: "'Georgia', serif", letterSpacing: "-3px" }}
      >
        Lost.
      </h1>

      <p className="text-gray-400 text-[15px] max-w-[260px] text-center leading-relaxed mb-10">
        This page doesn't exist or has been moved somewhere else.
      </p>

      <Link
        href="/"
        className="text-[13px] font-mono text-gray-900 border border-gray-200 px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
      >
        ← Back to home
      </Link>
    </main>
  );
};

export default NotFound;
