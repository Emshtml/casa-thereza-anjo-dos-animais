import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
      <Header />

      {/* ======= Conteúdo Principal ======= */}
      <main className="flex-grow">
        <section className="text-center py-16 bg-yellow-50">
          <h2 className="text-4xl font-bold mb-4 text-amber-700">
            🐕 Nossos Animais 🐈
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-10">
            Conheça os animais resgatados pela Casa Thereza. Cada um tem uma história única
            e está à espera de um lar cheio de carinho 💖
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
            {animais.map((animal, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform bg-white"
              >
                <Image
                  src={animal.src}
                  alt={animal.alt}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <p className="mt-2 font-semibold text-amber-800 text-center py-2">
                  {animal.nome}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



