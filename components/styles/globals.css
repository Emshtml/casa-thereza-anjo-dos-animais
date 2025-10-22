import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const animais = [
    { nome: "Fiona 1", alt: "Fiona 1", src: "/animais/fiona1.jpg" },
    { nome: "Fiona 2", alt: "Fiona 2", src: "/animais/fiona2.jpg" },
    { nome: "Mia 2", alt: "Mia 2", src: "/animais/mia2.jpg" },
    { nome: "Mia 3", alt: "Mia 3", src: "/animais/mia3.jpg" },
    { nome: "Mia 4", alt: "Mia 4", src: "/animais/mia4.jpg" },
    { nome: "Mia 6", alt: "Mia 6", src: "/animais/mia6.jpg" },
    { nome: "Mia e Gorducho", alt: "Mia e Gorducho", src: "/animais/mia_gorducho.jpg" },
    { nome: "Vesguinha 1", alt: "Vesguinha 1", src: "/animais/vesguinha1.jpg" },
    { nome: "Vesguinha 2", alt: "Vesguinha 2", src: "/animais/vesguinha2.jpg" },
    { nome: "Vesguinha 3", alt: "Vesguinha 3", src: "/animais/vesguinha3.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-accent text-text">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Seção de Boas-Vindas ===== */}
      <section className="text-center py-20 bg-yellow-50">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-green-primary mb-4"
        >
          🐾 Casa da Thereza Anjo dos Animais 🐾
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700"
        >
          Um espaço de amor, cuidado e esperança para cães e gatos que procuram um lar cheio de carinho 💖
        </motion.p>
      </section>

      {/* ===== Grid de Animais ===== */}
      <section className="py-20 container mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-primary mb-12">
          Nossos Animais 🐶🐱
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {animais.map((animal, index) => (
            <motion.div
              key={index}
              className="card-animal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={animal.src}
                alt={animal.alt}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <p className="mt-2 font-semibold text-amber-secondary text-center py-2">
                {animal.nome}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Seção Chamada para Ação ===== */}
      <section className="py-20 bg-green-primary text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Como Ajudar 🐾
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto mb-8"
        >
          Você pode contribuir com doações, voluntariado ou ajudando a divulgar nossos animais. Cada gesto faz a diferença!
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#"
            className="px-6 py-3 bg-yellow-500 rounded font-semibold hover:bg-yellow-600 transition"
          >
            Doar
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-yellow-400 rounded font-semibold hover:bg-yellow-500 transition"
          >
            Voluntariado
          </a>
          <a
            href="#adocao"
            className="px-6 py-3 bg-yellow-300 rounded font-semibold hover:bg-yellow-400 transition"
          >
            Adotar
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}



