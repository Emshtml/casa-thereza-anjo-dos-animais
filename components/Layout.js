export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
      
      {/* Header */}
      <header className="bg-yellow-100 shadow-md py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-amber-700 tracking-tight">
            Casa da Thereza Anjo dos Animais 🐾
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-center py-8 mt-12 border-t border-gray-200">
        <p className="mb-2">
          © 2025 Casa Thereza Anjo dos Animais 🐾
        </p>
        <p className="mb-2">
          Desenvolvido com ❤️ por Thereza e apoiadores da causa
        </p>
        <a
          href="https://casa-thereza-anjo-dos-animais.vercel.app"
          className="text-amber-600 hover:text-amber-800 hover:underline font-semibold transition-colors"
        >
          Visite o site oficial
        </a>
      </footer>
    </div>
  );
}
