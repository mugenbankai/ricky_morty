export default function HeroSection({ character, onViewDetails }) {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{character.name}</h1>
          <div className="hero-info">
            <span className="badge">{character.species}</span>
            <span className={`status ${character.status.toLowerCase()}`}>
              {character.status}
            </span>
          </div>
          <p className="hero-origin">
            <strong>Origines:</strong> {character.origin?.name || "Inconnu"}
          </p>
          <button className="hero-btn" onClick={onViewDetails}>
            Voir Détails →
          </button>
        </div>
      </div>
    </section>
  );
}
