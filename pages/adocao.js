import Layout from "../components/Layout";
import CardAnimal from "../components/CardAnimal";
import { motion } from "framer-motion";

export default function Adocao() {
  const animais = [
    { src: "/animais/fiona1.jpg", nome: "fiona", alt: "fiona", descricao: "Cachorrinha amorosa" },
    { src: "/animais/mia2.jpg", nome: "mia", alt: "mia", descricao: "Gatinha brincalhona" },
    { src: "/animais/vesguinha1.jpg", nome: "vesguinha", alt: "vesguinha", descricao: "gatinha  fofa" },
  ];

  return (
    <Layout>
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-green-700 mb-8"
        >
          Animais para Adoção mia1 fiona1 mia5
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {animais.map((animal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CardAnimal animal={animal} />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
