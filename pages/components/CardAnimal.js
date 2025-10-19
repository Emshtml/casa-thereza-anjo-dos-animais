import Image from "next/image";

export default function CardAnimal({ img, nome, idade }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image src={img} alt={nome} width={300} height={300} className="rounded-t-lg"/>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{nome}</h3>
        <p className="text-gray-600">{idade}</p>
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          Adotar
        </button>
      </div>
    </div>
  );
}
