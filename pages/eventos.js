import Layout from "../components/Layout";

export default function Eventos() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Eventos e Feiras 🐕</h2>
        <p className="text-lg mb-6">
          Participe das nossas feirinhas de adoção e eventos beneficentes!
        </p>
        <ul className="space-y-4 text-left max-w-md mx-auto">
          <li>📅 10 de Novembro – Feira de Adoção no Parque Central</li>
          <li>📅 24 de Novembro – Campanha de Vacinação Gratuita</li>
          <li>📅 8 de Dezembro – Natal dos Animais 🎄</li>
        </ul>
      </section>
    </Layout>
  );
}
