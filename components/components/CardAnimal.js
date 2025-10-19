export default function CardAnimal({ src, nome }) {
  return (
    <div className="card-animal">
      <img src={src} alt={nome} className="card-animal-img" />
      <div className="card-animal-body">
        <h3 className="card-animal-title">{nome}</h3>
      </div>
    </div>
  );
}
