import Layout from "../components/Layout";

export default function Galeria() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Galeria de Amigos 🐾</h2>
        <p className="mb-4 text-lg">
          Veja alguns dos nossos peludos em momentos de alegria!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img src="/animais/cachorro1.jpg" className="rounded-lg shadow-lg" alt="Cachorro" />
          <img src="/animais/gato1.jpg" className="rounded-lg shadow-lg" alt="Gato" />
          <img src="/animais/coelho1.jpg" className="rounded-lg shadow-lg" alt="Coelho" />
        </div>
      </section>
    </Layout>
  );
}
