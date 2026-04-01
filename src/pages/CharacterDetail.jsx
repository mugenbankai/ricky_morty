import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EvaluationForm from "../components/EvaluationForm";
import "../styles/CharacterDetail.css";

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Personnage non trouvé");
        return res.json();
      })
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="detail-page">
        <p className="loading">Chargement…</p>
      </div>
    );
  if (error)
    return (
      <div className="detail-page">
        <p className="error-message">{error}</p>
      </div>
    );
  if (!character) return null;

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Retour
      </button>

      <div className="detail-hero">
        <img
          src={character.image}
          alt={character.name}
          className="detail-image"
        />
        <div className="detail-info">
          <h1>{character.name}</h1>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Statut:</span>
              <span
                className={`value status ${character.status.toLowerCase()}`}
              >
                {character.status}
              </span>
            </div>
            <div className="info-item">
              <span className="label">Espèce:</span>
              <span className="value">{character.species}</span>
            </div>
            <div className="info-item">
              <span className="label">Genre:</span>
              <span className="value">{character.gender}</span>
            </div>
            <div className="info-item">
              <span className="label">Origine:</span>
              <span className="value">
                {character.origin?.name || "Inconnu"}
              </span>
            </div>
            <div className="info-item">
              <span className="label">Localisation:</span>
              <span className="value">
                {character.location?.name || "Inconnu"}
              </span>
            </div>
            <div className="info-item">
              <span className="label">Type:</span>
              <span className="value">{character.type || "Standard"}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="evaluation-section">
        <h2>Laisser une note sur ce personnage</h2>
        <EvaluationForm characterName={character.name} />
      </section>
    </div>
  );
}
