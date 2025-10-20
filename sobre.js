import Layout from '../components/Layout';

export default function Sobre() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
          Sobre Nós
        </h2>
        <p className="mb-4 text-gray-700 text-lg">
          A Casa da Thereza Anjo dos Animais nasceu do amor incondicional pelos animais abandonados.
          Nosso propósito é resgatar, cuidar e encontrar lares cheios de amor para cada um deles.
        </p>
        <p className="text-gray-700 text-lg">
          Com a ajuda de voluntários e apoiadores, proporcionamos tratamento, alimentação e abrigo a dezenas de animais todos os meses.
        </p>
      </section>
    </Layout>
  );
}
