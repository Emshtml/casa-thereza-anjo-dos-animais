import Layout from "../components/Layout";

export default function Ajudar() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Como Ajudar 🐾</h2>
      <p>
        Você pode contribuir de várias formas: doações, voluntariado ou apadrinhamento de um animal.
      </p>
      <ul className="list-disc ml-6 mt-3">
        <li>Doações via PIX: <strong>cpf-273505048-37-thereza-candida-rodrigues</strong></li>
        <li>Voluntariado presencial aos fins de semana</li>
        <li>Doação de ração, medicamentos e produtos de limpeza</li>
      </ul>
    </Layout>
  );
}
