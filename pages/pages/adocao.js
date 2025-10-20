import Layout from "../components/Layout";
import Image from "next/image";

export default function Adocao() {
  const animaisDisponiveis = [
    { nome: "Fiona", src: "/animais/Fiona1.jpg" },
    { nome: "Mia", src: "/animais/Mia2.jpg" },
    { nome: "Vesguinha", src: "/animais/Vesguinha1.jpg" },
  ];

  return (
    <Layout>
      <section className="text-center py-12 bg-accent">
        <h1 className="text-4xl font-bold mb-4 text-amber-700">
          🏡 Adote com Amor
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Adotar é um ato de amor que transforma vidas — a sua e a deles.  
          Escolha um amigo de quatro patas e dê a ele uma nova chance!
        </p>
      </section>

      {/* Grid de animais disponíveis */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-amber-700">
          Animais Disponíveis para Adoção 💕
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {animaisDisponiveis.map((animal, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <Image
                src={animal.src}
                alt={animal.nome}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <p className="py-3 font-semibold text-amber-800 text-center bg-amber-50">
                {animal.nome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ações de ajuda */}
      <section className="py-12 text-center bg-amber-50">
        <h2 className="text-2xl font-bold mb-6 text-amber-800">
          💕 Outras Formas de Ajudar
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:contato@casathereza.org"
            className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-secondary transition"
          >
            💌 Adote um Animal
          </a>
          <a
            href="mailto:contato@casathereza.org"
            className="bg-amber-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-amber-700 transition"
          >
            🧡 Apadrinhe um Pet
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
          >
            💚 Faça uma Doação
          </a>
        </div>
      </section>
    </Layout>
  );
}
