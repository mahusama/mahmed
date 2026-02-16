import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-black text-white">
      <div className="overlay mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        <Link href="/" className="text-xl font-semibold">
          Hi, nice to meet you!
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#skills" className="text-[#3c8bc0] hover:text-white">
            Skills
          </Link>
          <Link href="#experience" className="text-[#3c8bc0] hover:text-white">
            Experience
          </Link>
          <Link href="#projects" className="text-[#3c8bc0] hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="text-[#3c8bc0] hover:text-white">
            Contact
          </Link>
        </nav>
        

      </div>
    </header>
  );
}
