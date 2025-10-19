export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--text-light)] py-6 mt-10 text-center shadow-inner">
      <p className="text-sm">
        © {new Date().getFullYear()} <strong>Casa Thereza Anjo dos Animais</strong> 🐾 <br />
        Desenvolvido com ❤️ por <span className="text-[var(--color-secondary)] font-semibold">Thereza e apoiadores da causa</span>.
      </p>
      <p className="mt-2">
        <a
          href="https://casa-thereza-anjo-dos-animais.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[var(--color-secondary)]"
        >
          Visite o site oficial
        </a>
      </p>
    </footer>
  );
}
