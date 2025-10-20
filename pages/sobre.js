import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <Layout>
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-green-700 mb-6"
        >
          Sobre a Casa Thereza 🐾
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg text-gray-700"
        >
          A Casa Thereza Anjo dos Animais é um abrigo dedicado a resgatar, cuidar e encontrar lares para cães, gatos e coelhos em situação de vulnerabilidade. Nosso objetivo é levar amor, esperança e responsabilidade na adoção de animais.
        </motion.p>
      </section>
    </Layout>
  );
}
