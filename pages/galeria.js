import Layout from "../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Galeria() {
  const animais = [
    { src: "/animais/fiona1.jpg", nome: "fiona", alt: "fiona" },
    { src: "/animais/fiona2.jpg", nome: "Fiona 2", alt: "fiona 2" },
    { src: "/animais/mia-gorducho.jpg", nome: "mia_grducho", alt: "mia_gorducho" },
    { src: "/animais/mia2.jpg", nome: "mia2", alt: "mia2" },
    { src: "/animais/mia3.jpg", nome: "mia3", alt: "mia3" },
    { src: "/animais/mia4.jpg", nome: "mia4", alt: "mia4" },
    { src: "/animais/mia6.jpg", nome: "mia6", alt: "mia6" },
    { src: "/animais/vesguinha1.jpg", nome: "vesguinha 1", alt: "vesguinha1" },
    { src: "/animais/vesguinha2.jpg", nome: "vesguinha 2", alt: "vesguinha2" },
    { src: "/animais/vesguinha3.jpg", nome: "vesguinha 3", alt: "vesguinha3" },
  ];

  return (
    <Layout>
      <section className="text-center py-12 px-4 bg-amber-50 min-h-screen">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-amber-700 mb-8"
        >
          Galeria de Amigos 🐾
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
          {animais.map((animal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={animal.src}
                alt={animal.alt}
                width={350}
                height={250}
                className="rounded-xl shadow-md object-cover"
              />
              <p className="mt-3 font-semibold text-amber-800 text-lg">{animal.nome}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}


