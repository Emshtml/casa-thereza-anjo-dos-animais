import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-amber-200 py-4 shadow-md">
      <nav className="flex justify-center space-x-6 font-semibold text-gray-700">
        <Link href="/">Início</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/adocao">Adoção</Link>
        <Link href="/ajudar">Como Ajudar</Link>
        <Link href="/galeria">Galeria</Link>
        <Link href="/eventos">Eventos</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}
