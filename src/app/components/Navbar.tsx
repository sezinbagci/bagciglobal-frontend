"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");

  return (
    <header
      className="fixed top-0 w-full z-50 border-b"
      style={{ backgroundColor: "#b29371", borderColor: "#b29371" }}
    >
      <div className="flex items-center justify-between w-full">

        {/* LOGO */}
        <Link href={isEN ? "/en" : "/"} className="flex items-center pl-6">
          <Image
            src="/logo.png"
            alt="PKR BAGCI Logo"
            width={260}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* MENU */}
        <nav className="flex items-center gap-10 text-[15px] font-medium pr-10 py-3">

          <Link
            href={isEN ? "/en" : "/"}
            style={{ color: "#06273a" }}
            className="hover:opacity-70"
          >
            {isEN ? "Home" : "Ana Sayfa"}
          </Link>

          <Link
            href={isEN ? "/en/about" : "/about"}
            style={{ color: "#06273a" }}
            className="hover:opacity-70"
          >
            {isEN ? "About Us" : "Biz Kimiz"}
          </Link>

          {/* PROJECTS DROPDOWN */}
          <div className="relative group">
            <button
              style={{ color: "#06273a" }}
              className="hover:opacity-70"
            >
              {isEN ? "Projects ▾" : "Projelerimiz ▾"}
            </button>

            <div
              className="
                absolute left-0 mt-2 w-56 py-2 rounded-md shadow-xl border
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200
              "
              style={{ backgroundColor: "#06273a", borderColor: "#0b3d54" }}
            >
              <Link
                href={isEN ? "/en/projects/obsidian" : "/projects/obsidian"}
                className="block px-4 py-2 hover:bg-[rgba(255,255,255,0.07)]"
                style={{ color: "#f3f3f3" }}
              >
                Obsidian
              </Link>

              <Link
                href={isEN ? "/en/projects/whg" : "/projects/whg"}
                className="block px-4 py-2 hover:bg-[rgba(255,255,255,0.07)]"
                style={{ color: "#f3f3f3" }}
              >
                Warehouse Gardens (WHG)
              </Link>
            </div>
          </div>

          <Link
            href={isEN ? "/en/contact" : "/contact"}
            style={{ color: "#06273a" }}
            className="hover:opacity-70"
          >
            {isEN ? "Contact" : "İletişim"}
          </Link>

          {/* LANGUAGE SWITCH */}
          <div className="flex items-center gap-2 text-sm ml-4">
            <Link
              href="/"
              className={`hover:underline ${
                !isEN ? "font-semibold underline" : ""
              }`}
              style={{ color: "#06273a" }}
            >
              TR
            </Link>

            <span style={{ color: "#06273a" }}>|</span>

            <Link
              href="/en"
              className={`hover:underline ${
                isEN ? "font-semibold underline" : ""
              }`}
              style={{ color: "#06273a" }}
            >
              EN
            </Link>
          </div>

        </nav>
      </div>
    </header>
  );
}


 

