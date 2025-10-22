import Layout from "../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";

const exemplosAnimais = [
  { nome: "Fiona", src: "/animais/fiona1.jpg" },
  { nome: "Mia", src: "/animais/mia2.jpg" },
  { nome: "Bento", src: "/animais/mia_gorducho.jpg" },
  { nome: "Vesguinha", src: "/animais/vesguinha1.jpg" },
];

export default function Ajudar() {
  return (
    <Layout>
      {/* Seção Hero */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-green-50 to-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-green-700 mb-6"
        >
          Como Ajudar 🐾
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-10"
        >
          Você pode contribuir com doações, trabalho voluntário ou ajudando a divulgar nossos animais disponíveis para adoção. Cada gesto faz a diferença!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
        >
          <a
            href="#"
            className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
          >
            Doar
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Voluntariado
          </a>
        </motion.div>
      </section>

      {/* Seção de exemplos de animais ajudados */}
      <section className="py-16 px-4 bg-white">
        <h3 className="text-3xl font-bold text-center text-green-700 mb-12">
          Animais que já receberam ajuda
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {exemplosAnimais.map((animal, index) => (
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
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <p className="mt-3 font-semibold text-green-700 text-center py-2">
                {animal.nome}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

