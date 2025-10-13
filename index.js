import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Bem-vindo à Casa da Thereza Anjo dos Animais 🐶🐱
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Um lar cheio de amor, cuidado e esperança. Aqui, cada patinha tem uma história e um novo começo.
        </p>
        <Image src="/animais/cachorro1.jpg" alt="Cachorro feliz" width={600} height={400} className="rounded-xl mx-auto shadow-lg" />
      </section>
    </Layout>
  )
}