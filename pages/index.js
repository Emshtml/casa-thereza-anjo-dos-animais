
// pages/index.js
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  // 🐾 Lista das imagens reais (pasta public/animais)
  const animais = [
    { nome: "Fiona 🐶", src: "/animais/fiona1.jpg" },
    { nome: "Fiona 2 🐶", src: "/animais/fiona2.jpg" },
    { nome: "Mia 🐱", src: "/animais/mia1.jpg" },
    { nome: "Mia 2 🐱", src: "/animais/mia2.jpg" },
    { nome: "Vesguinha 🐶", src: "/animais/vesguinha1.jpg" },
    { nome: "Vesguinha 2 🐶", src: "/animais/vesguinha2.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-rose-50 text-gray-800">
      <Header />

      {/* 🌸 Cabeçalho de boas-vindas */}
      <section className="text-center py-16 px-6 bg-gradient-to-b from-rose-100 to-rose-50">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-rose-700 mb-6"
        >
          Casa Thereza Anjo dos Animais 🐾
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Um espaço cheio de <span className="text-rose-700 font-semibold">amor, cuidado e esperança.</span><br />
          Aqui, cada patinha tem uma história e um novo começo. 💖
        </motion.p>
      </section>

      {/* 🐕‍🦺 Galeria com fotos reais */}
      <section className="py-14 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-10">
          Nossos amigos resgatados 🏡
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {animais.map((animal, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-rose-50 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <Image
                src={animal.src}
                alt={animal.nome}
                width={400}
                height={300}
                className="w-full h-72 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-rose-700">{animal.nome}</h3>
                <p className="text-gray-600 italic">Aguardando um lar cheio de amor ❤️</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}


