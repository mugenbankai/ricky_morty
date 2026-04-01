import { useEffect, useRef, useState } from "react";
import CharacterGrid from "../components/CharacterGrid";
import "../styles/Home.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextUrl, setNextUrl] = useState(
    "https://rickandmortyapi.com/api/character",
  );
  const gridRef = useRef(null);

  // Initial load + hero character
  useEffect(() => {
    fetchCharacters(nextUrl, true);
  }, []);

  const fetchCharacters = async (url, isInitial = false) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Erreur API");
      const data = await response.json();

      if (isInitial) {
        setCharacters(data.results);
      } else {
        setCharacters((prev) => [...prev, ...data.results]);
      }

      setNextUrl(data.info.next || null);
    } catch (err) {
      setError("Une erreur est survenue. Réessayez.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Infinite scroll detector
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextUrl && !loading) {
          fetchCharacters(nextUrl);
        }
      },
      { threshold: 0.1 },
    );

    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [nextUrl, loading]);

  return (
    <div className="home">
      <section className="grid-section">
        <h2>Personnages de l'univers</h2>
        {error && <div className="error-message">{error}</div>}
        <CharacterGrid characters={characters} />
        <div ref={gridRef} className="load-more-trigger">
          {loading && <p className="loading">Chargement…</p>}
          {!nextUrl && characters.length > 0 && (
            <p className="end-message">Fin de la liste</p>
          )}
        </div>
      </section>
    </div>
  );
}
