# 🌌 Multivers Explorer

Une application React permettant d'explorer des personnages de l'univers **Rick and Morty** via l'API publique.

## 🎯 Fonctionnalités

- ✨ **Hero Section Dynamique** : Affiche le personnage actuellement en vue avec ses informations principales
- 📜 **Infinite Scroll** : Charge automatiquement plus de personnages en bas de page
- 🎴 **Grille de Personnages** : Mini-cartes stylisées en grille responsive
- 🔍 **Page Détail** : Informations complètes sur chaque personnage
- 📝 **Formulaire d'Évaluation** : Laissez une note avec validation stricte (Formik + Zod)
- 🎨 **Design Cyberpunk** : Néons verts/bleus sur fond sombre
- ♿ **Responsive** : Fonctionne sur mobile, tablette et desktop

## 📋 Prérequis

- Node.js 16+
- npm ou yarn

## 🚀 Installation & Lancement

```bash
# Cloner/télécharger le projet
cd multivers-explorer

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible à `http://localhost:5173`

## 📦 Structure du Projet

```
src/
├── pages/
│   ├── Home.jsx              # Page d'accueil avec hero + infinite scroll
│   └── CharacterDetail.jsx   # Page détail personnage + formulaire
├── components/
│   ├── HeroSection.jsx       # Composant hero section
│   ├── CharacterGrid.jsx     # Grille de personnages
│   ├── CharacterMiniCard.jsx # Mini-carte personnage
│   ├── EvaluationForm.jsx    # Formulaire d'évaluation
│   └── EvaluationModal.jsx   # Modale de résumé
├── styles/
│   ├── App.css               # Styles globaux
│   ├── Home.css              # Styles Home
│   └── CharacterDetail.css   # Styles détail
├── App.jsx                   # Routing principal
└── main.jsx                  # Point d'entrée
```

## 🎨 Design

- **Hero Section** : Grande image du personnage avec overlay gradient
- **Hero Change** : Mise à jour au scroll (personnage visible en haut)
- **Mini-Cartes** : 120x120px avec image et nom
- **Grille** : 3-5 colonnes selon l'écran
- **Couleurs** : #00ff88 (vert néon), #00d4ff (cyan), #ff0088 (magenta)

## 🔧 Technologie

- **React 18** : UI framework
- **React Router** : Navigation SPA
- **Formik** : Gestion formulaires
- **Zod** : Validation schémas
- **Vite** : Build tool
- **CSS3** : Styles natifs (Grid, Flexbox, Gradients)

## 📡 API Utilisée

- **Endpoint**: https://rickandmortyapi.com/api/character
- **Pagination**: Via `info.next` et `info.prev`
- **Détail**: `/api/character/:id`

## ✅ Checklist de Notation

- [x] Structure composants cohérente
- [x] Fetch + useEffect + gestion d'erreurs
- [x] Pagination fonctionnelle
- [x] Routing avec useParams
- [x] Formik + Zod validation
- [x] Infinite scroll
- [x] Hero section dynamique
- [x] Design unique + responsive

## 🐛 Limites API Connues

**429 (Too Many Requests)** : Peu d'effectuer trop de requêtes. Solution : ralentissez les clics.

## 📝 Notes Développement

- Le hero change automatiquement au scroll
- Infinite scroll déclenche au seuil de 10% du bas
- Modal validation avec `useRef` (non au programme mais accepté)
- Commentaire optionnel dans le formulaire

## 🔒 Licence

Libre d'usage pour ce TP.
