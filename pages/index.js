import Layout from "../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";

const animais = [
  { nome: "Fiona 1", src: "/animais/fiona1.jpg" },
  { nome: "Fiona 2", src: "/animais/fiona2.jpg" },
  { nome: "Mia 2", src: "/animais/mia2.jpg" },
  { nome: "Mia 3", src: "/animais/mia3.jpg" },
  { nome: "Mia 4", src: "/animais/mia4.jpg" },
  { nome: "Mia 6", src: "/animais/mia6.jpg" },
  { nome: "Mia e Gorducho", src: "/animais/mia_gorducho.jpg" },
  { nome: "Vesguinha 1", src: "/animais/vesguinha1.jpg" },
  { nome: "Vesguinha 2", src: "/animais/vesguinha2.jpg" },
  { nome: "Vesguinha 3", src: "/animais/vesguinha3.jpg" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero / Boas-vindas */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-green-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-green-700 mb-6"
        >
          🐾 Bem-vindo à Casa Thereza Anjo dos Animais 🐾
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 mb-12"
        >
          Um espaço de amor, cuidado e esperança para cães e gatos que procuram um lar cheio de carinho 💖
        </motion.p>
        <motion.a
          href="/adocao"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-block px-8 py-4 bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:bg-green-800 transition"
        >
          Ver todos os animais
        </motion.a>
      </section>

      {/* Grid de Animais */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Nossos Animais 🐕🐈
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {animais.map((animal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform bg-green-50"
            >
              <Image
                src={animal.src}
                alt={animal.nome}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <p className="mt-3 font-semibold text-green-700 text-center py-2">
                {animal.nome}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-20 px-4 text-center bg-green-50">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-green-700 mb-6"
        >
          Quer ajudar ainda mais?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-gray-700 mb-8"
        >
          Contribua com doações ou voluntariado e faça parte da nossa missão de resgatar e cuidar dos animais.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="/ajudar"
            className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
          >
            Doar
          </a>
          <a
            href="/ajudar"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Voluntariado
          </a>
        </motion.div>
      </section>
    </Layout>
  );
}


