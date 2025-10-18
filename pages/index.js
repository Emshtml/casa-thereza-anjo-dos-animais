import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Bem-vindo à Casa Thereza 🐾</h2>
        <p className="text-lg mb-6">
          Um abrigo de amor e esperança para cães, gatos e coelhos em busca de um lar.
        </p>
        <img
          src="/animais/cachorro1.jpg"
          alt="Cachorro feliz"
          className="mx-auto rounded-lg shadow-lg w-64"
        />
      </section>
    </Layout>
  );
}
