// pages/index.js
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const animais = [
    { nome: "Fiona 1", src: "/animais/Fiona 1.jpg" },
    { nome: "Fiona 2", src: "/animais/Fiona 2.jpg" },
    { nome: "Mia 2", src: "/animais/Mia 2.jpg" },
    { nome: "Mia 3", src: "/animais/Mia 3.jpg" },
    { nome: "Mia 4", src: "/animais/Mia 4.jpg" },
    { nome: "Mia 6", src: "/animais/Mia 6.jpg" },
    { nome: "Mia e Gorducho", src: "/animais/Mia e Gorducho.jpg" },
    { nome: "Vesguinha 1", src: "/animais/Vesguinha 1.jpg" },
    { nome: "Vesguinha 2", src: "/animais/Vesguinha 2.jpg" },
    { nome: "Vesguinha 3", src: "/animais/Vesguinha 3.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-rose-50 text-gray-800">
      <Header />

      <section className="text-center py-16 px-6 bg-gradient-to-b from-rose-100 to-rose-50">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-rose-700 mb-6"
        >
          🐶 Casa Thereza Anjo dos Animais 🐱
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
        >
          Um lar de amor, cuidado e esperança para nossos amigos de quatro patas 💖
        </motion.p>
      </section>

      <section className="py-14 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-10">
          Nossos animais para adoção 🐾
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
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-rose-700">{animal.nome}</h3>
                <button className="mt-3 px-4 py-2 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition">
                  Adotar ❤️
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}



