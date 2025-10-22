import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const animais = [
    { nome: "Fiona 1", alt: "Fiona 1", src: "/animais/Fiona 1.jpg" },
    { nome: "Fiona 2", alt: "Fiona 2", src: "/animais/Fiona 2.jpg" },
    { nome: "Mia 2", alt: "Mia 2", src: "/animais/Mia2.jpg" },
    { nome: "Mia 3", alt: "Mia 3", src: "/animais/Mia3.jpg" },
    { nome: "Mia 4", alt: "Mia 4", src: "/animais/Mia4.jpg" },
    { nome: "Mia 6", alt: "Mia 6", src: "/animais/Mia6.jpg" },
    { nome: "Mia e Gorducho", alt: "Mia e Gorducho", src: "/animais/Mia_gorducho.jpg" },
    { nome: "Vesguinha 1", alt: "Vesguinha 1", src: "/animais/Vesguinha1.jpg" },
    { nome: "Vesguinha 2", alt: "Vesguinha 2", src: "/animais/Vesguinha2.jpg" },
    { nome: "Vesguinha 3", alt: "Vesguinha 3", src: "/animais/Vesguinha3.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-accent to-white text-textPrimary">
      <Header />

      {/* ======= Seção de Boas-vindas ======= */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-title font-bold mb-4 text-primary">
          🐾 Bem-vindo à Casa Thereza Anjo dos Animais 🐾
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-textPrimary">
          Um espaço de amor, cuidado e esperança para nossos amigos de quatro patas.  
          Conheça nossos animais resgatados e ajude a dar um novo lar cheio de carinho 💖
        </p>
      </section>

      {/* ======= Grid de Animais ======= */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-title font-bold text-center mb-12 text-primary">
          Nossos Animais
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-6xl mx-auto">
          {animais.map((animal, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform bg-white"
            >
              <Image
                src={animal.src}
                alt={animal.alt}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <p className="mt-3 font-semibold text-primary text-center py-2">
                {animal.nome}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

