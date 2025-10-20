import Layout from "../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Galeria() {
  const animais = [
    { src: "/animais/fiona1.jpg", nome: "Fiona", alt: "Fiona" },
    { src: "/animais/fiona2.jpg", nome: "Fiona 2", alt: "Fiona 2" },
    { src: "/animais/mia-gorducho.jpg", nome: "Mia e Gorducho", alt: "Mia e Gorducho" },
    { src: "/animais/mia2.jpg", nome: "Mia 2", alt: "Mia 2" },
    { src: "/animais/mia3.jpg", nome: "Mia 3", alt: "Mia 3" },
    { src: "/animais/mia4.jpg", nome: "Mia 4", alt: "Mia 4" },
    { src: "/animais/mia6.jpg", nome: "Mia 6", alt: "Mia 6" },
    { src: "/animais/vesguinha1.jpg", nome: "Vesguinha 1", alt: "Vesguinha 1" },
    { src: "/animais/vesguinha2.jpg", nome: "Vesguinha 2", alt: "Vesguinha 2" },
    { src: "/animais/vesguinha3.jpg", nome: "Vesguinha 3", alt: "Vesguinha 3" },
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


