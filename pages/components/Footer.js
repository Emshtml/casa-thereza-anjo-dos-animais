export default function Footer() {
  return (
    <footer className="bg-amber-100 text-center py-6 mt-10 text-gray-700 text-sm">
      <p>© {new Date().getFullYear()} Casa Thereza Anjo dos Animais 🐾</p>
      <p>Siga-nos nas redes sociais: 
        <a href="#" className="text-green-600 mx-1">Instagram</a> | 
        <a href="#" className="text-green-600 mx-1">Facebook</a>
      </p>
    </footer>
  );
}
