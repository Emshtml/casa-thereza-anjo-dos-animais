import Layout from "../components/Layout";

export default function Adocao() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Animais para Adoção 💕</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/animais/cachorro1.jpg" alt="Cachorro" className="rounded-lg shadow" />
        <img src="/animais/gato1.jpg" alt="Gato" className="rounded-lg shadow" />
        <img src="/animais/coelho1.jpg" alt="Coelho" className="rounded-lg shadow" />
      </div>
      <p className="mt-4">Entre em contato para adotar um novo amigo! 🐶🐱🐰</p>
    </Layout>
  );
}
