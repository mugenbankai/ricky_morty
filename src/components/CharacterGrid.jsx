import { useNavigate } from "react-router-dom";
import CharacterMiniCard from "./CharacterMiniCard";

export default function CharacterGrid({ characters }) {
  const navigate = useNavigate();

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterMiniCard
          key={character.id}
          character={character}
          onClick={() => navigate(`/character/${character.id}`)}
        />
      ))}
    </div>
  );
}
