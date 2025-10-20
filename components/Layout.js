export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
      <header className="bg-yellow-50 shadow py-4">
        <h1 className="text-2xl text-center font-bold">
          Casa da Thereza Anjo dos Animais 🐾
        </h1>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="text-center py-6 text-gray-500 text-sm bg-gray-100">
        © 2025 Casa Thereza Anjo dos Animais 🐾<br />
        Desenvolvido com ❤️ por Thereza e apoiadores da causa.<br />
        <a
          href="https://casa-thereza-anjo-dos-animais.vercel.app"
          className="text-blue-500 hover:underline"
        >
          Visite o site oficial
        </a>
      </footer>
    </div>
  );
}
