# Multivers Explorer

Application React pour explorer des personnages de Rick and Morty via l'API publique.

## Fonctionnalités

- Grille de personnages avec infinite scroll
- Page détail pour chaque personnage
- Formulaire d'évaluation avec validation
- Design responsive

## Installation

```bash
npm install
npm run dev
```

L'application sera accessible à http://localhost:5173

## Structure du Projet

```
src/
├── pages/
│   ├── Home.jsx
│   └── CharacterDetail.jsx
├── components/
│   ├── CharacterGrid.jsx
│   ├── CharacterMiniCard.jsx
│   ├── EvaluationForm.jsx
│   └── EvaluationModal.jsx
├── styles/
│   ├── App.css
│   ├── Home.css
│   └── CharacterDetail.css
├── App.jsx
└── main.jsx
```

## Technologies

- React 18
- React Router
- Formik
- Zod
- Vite

## API

- Endpoint: https://rickandmortyapi.com/api/character
- Pagination: Via info.next et info.prev
- Détail: /api/character/:id
