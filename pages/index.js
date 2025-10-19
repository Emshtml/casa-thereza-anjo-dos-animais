import Layout from '../components/Layout'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      {/* Seção com gradiente */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-green-50 via-green-100 to-green-50">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-primary mb-4"
        >
          Bem-vindo à Casa da Thereza Anjo dos Animais 🐾
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-10 text-lg text-gray-700"
        >
          Um lar cheio de amor, cuidado e esperança. Aqui, cada patinha tem uma história e um novo começo.
        </motion.p>

        {/* Galeria animada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
          {[
            { src: '/animais/cachorro1.jpg', nome: 'Thor 🐶', alt: 'Cachorro feliz' },
            { src: '/animais/gato1.jpg', nome: 'Mia 🐱', alt: 'Gato fofo' },
            { src: '/animais/coelho1.jpg', nome: 'Bento 🐰', alt: 'Coelho feliz' },
          ].map((animal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
              aria-label={`Foto do ${animal.nome}`}
            >
              <Image
                src={animal.src}
                alt={animal.alt}
                width={350}
                height={250}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                priority={index === 0}
              />
              <p className="mt-2 font-medium text-gray-800">{animal.nome}</p>
            </motion.div>
          ))}
        </div>

        {/* Botão “Ver todos os animais” */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="/adocao"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-primary/90 transition-colors"
          >
            🐾 Ver todos os animais
          </motion.a>
        </motion.div>
      </section>
    </Layout>
  )
}
