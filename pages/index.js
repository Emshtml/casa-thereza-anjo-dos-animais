import Layout from "../components/Layout";

export default function Home() {
  const animais = [
    { nome: "Fiona", tipo: "Cachorro", emoji: "🐶", imagem: "/images/Fiona 1.jpg" },
    { nome: "Fiona", tipo: "Cachorro", emoji: "🐶", imagem: "/images/Fiona 2.jpg" },
    { nome: "Mia", tipo: "Gato", emoji: "🐱", imagem: "/images/Mia2.jpg" },
    { nome: "Mia", tipo: "Gato", emoji: "🐱", imagem: "/images/Mia3.jpg" },
    { nome: "Mia", tipo: "Gato", emoji: "🐱", imagem: "/images/Mia4.jpg" },
    { nome: "Mia", tipo: "Gato", emoji: "🐱", imagem: "/images/Mia6.jpg" },
    { nome: "Mia", tipo: "Gato", emoji: "🐱", imagem: "/images/Mia_gorducho.jpg" },
    { nome: "Vesguinha", tipo: "Cachorro", emoji: "🐶", imagem: "/images/Vesguinha1.jpg" },
    { nome: "Vesguinha", tipo: "Cachorro", emoji: "🐶", imagem: "/images/Vesguinha2.jpg" },
    { nome: "Vesguinha", tipo: "Cachorro", emoji: "🐶", imagem: "/images/Vesguinha3.jpg" },
  ];

  return (
    <Layout>
      {/* Boas-vindas */}
      <section className="text-center py-12 bg-yellow-50">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo à Casa da Thereza Anjo dos Animais 🐾</h2>
        <p className="text-lg max-w-xl mx-auto">
          Um lar cheio de amor, cuidado e esperança. Aqui, cada patinha tem uma história e um novo começo.
        </p>
      </section>

      {/* Animais */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Animais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {animais.map((animal, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={animal.imagem} alt={animal.nome} className="w-full h-48 object-cover"/>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{animal.nome} {animal.emoji}</h3>
                <p className="text-gray-600">{animal.tipo}</p>
                <a href="https://wa.me/559999999999" className="inline-block mt-2 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">
                  Adotar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Link */}
      <section className="text-center py-8 bg-gray-100">
        <a href="#todos-animais" className="text-blue-600 font-semibold hover:underline">🐾 Ver todos os animais</a>
      </section>
    </Layout>
  );
}

