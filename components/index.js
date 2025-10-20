import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  const animais = [
    { nome: "Fiona", alt: "Fiona 1", src: "/animais/fiona1.jpg" },
    { nome: "Fiona", alt: "Fiona 2", src: "/animais/fiona2.jpg" },
    { nome: "Mia", alt: "Mia 2", src: "/animais/mia2.jpg" },
    { nome: "Mia", alt: "Mia 3", src: "/animais/mia3.jpg" },
    { nome: "Mia", alt: "Mia 4", src: "/animais/mia4.jpg" },
    { nome: "Mia", alt: "Mia 6", src: "/animais/mia6.jpg" },
    { nome: "Mia e Gorducho", alt: "Mia e Gorducho", src: "/animais/mia_gorducho.jpg" },
    { nome: "Vesguinha", alt: "Vesguinha 1", src: "/animais/vesguinha1.jpg" },
    { nome: "Vesguinha", alt: "Vesguinha 2", src: "/animais/vesguinha2.jpg" },
    { nome: "Vesguinha", alt: "Vesguinha 3", src: "/animais/vesguinha3.jpg" },
  ];

  return (
    <Layout>
      {/* Seção de boas-vindas */}
      <section className="text-center py-16 bg-yellow-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-700">
          🐾 Bem-vindo à Casa Thereza Anjo dos Animais 🐾
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          Um espaço de amor, cuidado e esperança para cães e gatos que procuram um lar cheio de carinho.
        </p>
      </section>

      {/* Seção de animais */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-700">
          Nossos Animais
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
          {animais.map((animal, index) => (
            <div
              key={index}
              className="border rounded-3xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 bg-white"
            >
              <Image
                src={animal.src}
                alt={animal.alt}
                width={400}
                height={300}
                className="w-full h-64 md:h-72 object-cover rounded-t-2xl"
              />
              <div className="py-4">
                <p className="text-center font-bold text-amber-800 text-lg">{animal.nome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/animais"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            🐾 Ver todos os animais
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="mt-16 text-center text-sm text-gray-500 pb-8">
        © 2025 Casa Thereza Anjo dos Animais 🐾<br />
        Desenvolvido com ❤️ por Thereza e apoiadores da causa.
      </footer>
    </Layout>
  );
}

