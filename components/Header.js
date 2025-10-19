import Link from "next/link";

export default function Header() {
  return (
    <header className="header-promo sticky top-0 z-50 shadow-lg backdrop-blur-md bg-[var(--color-primary)] bg-opacity-95">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Nome do site */}
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          🏡 Casa Thereza
        </Link>

        {/* Menu de navegação */}
        <nav className="hidden sm:flex space-x-6 text-[var(--text-light)] font-medium">
          <Link href="/" className="hover:text-[var(--color-secondary)] transition-colors">
            Início
          </Link>
          <Link href="/sobre" className="hover:text-[var(--color-secondary)] transition-colors">
            Sobre
          </Link>
          <Link href="/adocao" className="hover:text-[var(--color-secondary)] transition-colors">
            Adoção
          </Link>
          <Link href="/ajudar" className="hover:text-[var(--color-secondary)] transition-colors">
            Como Ajudar
          </Link>
          <Link href="/contato" className="hover:text-[var(--color-secondary)] transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
