import { useEffect, useState } from "react";
import CharacterGrid from "../components/CharacterGrid";
import "../styles/Home.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(
    "https://rickandmortyapi.com/api/character",
  );

  // Initial load
  useEffect(() => {
    fetchCharacters("https://rickandmortyapi.com/api/character");
  }, []);

  const fetchCharacters = async (url) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Erreur API");
      const data = await response.json();

      setCharacters(data.results);
      setNextUrl(data.info.next || null);
      setPrevUrl(data.info.prev || null);
    } catch (err) {
      setError("Une erreur est survenue. Réessayez.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (nextUrl) fetchCharacters(nextUrl);
  };

  const handlePrev = () => {
    if (prevUrl) fetchCharacters(prevUrl);
  };

  return (
    <div className="home">
      <section className="grid-section">
        <h2>Personnages de l'univers</h2>
        {error && <div className="error-message">{error}</div>}
        {loading && <p className="loading">Chargement…</p>}
        {!loading && <CharacterGrid characters={characters} />}

        <div className="pagination-buttons">
          <button
            className="btn-pagination"
            onClick={handlePrev}
            disabled={!prevUrl || loading}
          >
            ← Précédent
          </button>
          <button
            className="btn-pagination"
            onClick={handleNext}
            disabled={!nextUrl || loading}
          >
            Suivant →
          </button>
        </div>
      </section>
    </div>
  );
}
