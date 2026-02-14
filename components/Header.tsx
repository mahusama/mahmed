import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        <Link href="/" className="text-xl font-semibold">
          Hi, nice to meet you!
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/features" className="text-gray-600 hover:text-black">
            Skills
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-black">
            Experience
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-black">
            Projects
          </Link>
        </nav>
        

      </div>
    </header>
  );
}
