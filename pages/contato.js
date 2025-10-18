import Layout from "../components/Layout";

export default function Contato() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Entre em Contato 💬</h2>
        <p className="text-lg mb-4">
          Fale conosco para adotar, ajudar ou conhecer o projeto!
        </p>
        <p>Email: <a href="mailto:contato@casathereza.org" className="text-blue-600">contato@casathereza.org</a></p>
        <p>WhatsApp: <a href="https://wa.me/5500000000000" className="text-green-600">Clique aqui</a></p>
      </section>
    </Layout>
  );
}
