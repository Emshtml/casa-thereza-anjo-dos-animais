import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">
          Casa da Thereza Anjo dos Animais
        </h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/adocao">Adoção</Link>
          <Link href="/ajudar">Como Ajudar</Link>
          <Link href="/galeria">Galeria</Link>
          <Link href="/eventos">Eventos</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  )
}