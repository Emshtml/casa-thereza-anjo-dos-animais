import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Eventos() {
  const eventos = [
    {
      data: "📅 10 de Novembro",
      titulo: "Feira de Adoção no Parque Central",
      descricao: "Venha conhecer nossos peludos e encontrar seu novo melhor amigo!",
    },
    {
      data: "📅 24 de Novembro",
      titulo: "Campanha de Vacinação Gratuita",
      descricao: "Proteja seu pet! Vacinação gratuita para cães e gatos.",
    },
    {
      data: "📅 8 de Dezembro",
      titulo: "Natal dos Animais 🎄",
      descricao: "Um evento especial com arrecadação de ração e presentes para os bichinhos.",
    },
  ];

  return (
    <Layout>
      <section className="text-center py-16 px-4 bg-amber-50 min-h-screen">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-amber-700 mb-6"
        >
          Eventos e Feiras 🐕
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
        >
          Participe das nossas feirinhas de adoção, campanhas e eventos solidários.
        </motion.p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {eventos.map((evento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-6 border border-amber-100"
            >
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {evento.data}
              </h3>
              <p className="text-gray-900 font-medium mb-2">{evento.titulo}</p>
              <p className="text-gray-600 text-sm">{evento.descricao}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
