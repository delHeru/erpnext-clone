import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20">
      <h1 className="text-2xl font-semibold">
        Page not found
      </h1>

      <p className="text-gray-500 mt-2">
        Halaman yang kamu buka tidak tersedia
      </p>

      <Link
        href="/home"
        className="mt-4 text-blue-600 hover:underline"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}
