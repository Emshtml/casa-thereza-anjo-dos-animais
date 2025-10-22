// pages/index.js
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
    <div className="min-h-screen flex flex-col font-sans bg-accent text-textPrimary">
      <Header />

      {/* Seção de boas-vindas */}
      <section className="text-center py-20 px-4 bg-yellow-50">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-primary mb-4"
        >
          🐾 Bem-vindo à Casa Thereza Anjo dos Animais 🐾
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-textPrimary"
        >
          Um espaço de amor, cuidado e esperança para cães e gatos que procuram um lar cheio de carinho.
        </motion.p>
      </section>

      {/* Seção de animais */}
      <section className="py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Nossos Animais
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {animais.map((animal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-animal bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform"
            >
              <Image
                src={animal.src}
                alt={animal.alt}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <p className="mt-3 font-semibold text-center text-secondary text-lg py-2">
                {animal.nome}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/galeria"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-green-800 transition-colors"
          >
            🐾 Ver todos os animais
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}




