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
      <section className="text-center py-12 bg-yellow-50">
        <h2 className="text-4xl font-bold mb-4 text-amber-700">
          🐾 Bem-vindo à Casa Thereza Anjo dos Animais 🐾
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Um espaço de amor, cuidado e esperança para cães e gatos que procuram um lar cheio de carinho.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-700">
          Nossos Animais
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
          {animais.map((animal, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform bg-white"
            >
              <Image
                src={animal.src}
                alt={animal.alt}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <p className="mt-2 font-semibold text-amber-800 text-center py-2">
                {animal.nome}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
