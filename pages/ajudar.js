import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Ajudar() {
  return (
    <Layout>
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-green-700 mb-6"
        >
          Como Ajudar 🐾
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg text-gray-700 mb-6"
        >
          Você pode contribuir com doações, trabalho voluntário ou ajudando a divulgar nossos animais disponíveis para adoção. Cada gesto faz a diferença!
        </motion.p>
        <div className="flex justify-center gap-6">
          <a href="#" className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800 transition">Doar</a>
          <a href="#" className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition">Voluntariado</a>
        </div>
      </section>
    </Layout>
  );
}
