export default function CharacterMiniCard({ character, onClick }) {
  return (
    <div
      className="character-mini-card"
      data-id={character.id}
      onClick={onClick}
      title={character.name}
    >
      <img src={character.image} alt={character.name} />
      <div className="card-footer">
        <p className="card-name">{character.name}</p>
        <span className={`card-species badge-small`}>{character.species}</span>
      </div>
    </div>
  );
}
