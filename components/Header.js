import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md backdrop-blur-md bg-amber-600 bg-opacity-95">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo com nome do site */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo Casa da Thereza Anjo dos Animais"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-white tracking-wide">
            Casa da Thereza
          </span>
        </Link>

        {/* Menu de navegação */}
        <nav className="hidden sm:flex space-x-6 text-white font-medium items-center">
          <Link href="/" className="hover:text-yellow-200 transition-colors">
            Início
          </Link>
          <Link href="/sobre" className="hover:text-yellow-200 transition-colors">
            Sobre
          </Link>
          <Link href="/adocao" className="hover:text-yellow-200 transition-colors">
            Adoção
          </Link>
          <Link href="/ajudar" className="hover:text-yellow-200 transition-colors">
            Como Ajudar
          </Link>
          <Link href="/contato" className="hover:text-yellow-200 transition-colors">
            Contato
          </Link>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/casadatherezaong?igsh=aTgwOHVoZ2FyaGE3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}


