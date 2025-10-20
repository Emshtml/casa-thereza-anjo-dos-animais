import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  const animais = [
    { nome: "Fiona", alt: "Fiona 1", src: "/animais/Fiona1.jpg" },
    { nome: "Fiona", alt: "Fiona 2", src: "/animais/Fiona2.jpg" },
    { nome: "Mia", alt: "Mia 2", src: "/animais/Mia2.jpg" },
    { nome: "Mia", alt: "Mia 3", src: "/animais/Mia3.jpg" },
    { nome: "Mia", alt: "Mia 4", src: "/animais/Mia4.jpg" },
    { nome: "Mia", alt: "Mia 6", src: "/animais/Mia6.jpg" },
    { nome: "Mia e Gorducho", alt: "Mia e Gorducho", src: "/animais/Mia_gorducho.jpg" },
    { nome: "Vesguinha", alt: "Vesguinha 1", src: "/animais/Vesguinha1.jpg" },
    { nome: "Vesguinha", alt: "Vesguinha 2", src: "/animais/Vesguinha2.jpg" },
    { nome: "Vesguinha", alt: "Vesguinha 3", src: "/animais/Vesguinha3.jpg" },
  ];

  return (
    <Layout>
      {/* Seção de boas-vindas */}
      <section className="text-center py-12 bg-accent">
        <h1 className="text-4xl font-bold mb-4 text-amber-700">
          🐾 Bem-vindo à Casa Thereza Anjo dos Animais 🐾
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Um lar cheio de amor, cuidado e esperança. Aqui, cada patinha tem uma história e um novo começo.
        </p>
      </section>

      {/* Grid dos animais reais */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-amber-700">
          Nossos Animais 💕
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
          {animais.map((animal, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <Image
                src={animal.src}
                alt={animal.alt}
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

      {/* Rodapé */}
      <footer className="text-center py-6 text-gray-600 text-sm bg-gray-100 mt-10 border-t border-gray-200">
        © 2025 Casa Thereza Anjo dos Animais 🐾 <br />
        Desenvolvido com ❤️ por Thereza e apoiadores da causa. <br />
        <a
          href="https://casa-thereza-anjo-dos-animais.vercel.app"
          className="text-primary hover:underline font-medium"
        >
          Visite o site oficial
        </a>
      </footer>
    </Layout>
  );
}


