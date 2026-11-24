# BUREAU_047

**BUREAU_047** est un site web interactif d'enquêtes criminelles réalisé dans le cadre du **TP 1 Bootstrap** au semestre 5. Le visiteur choisit une affaire, consulte son historique, télécharge un dossier PDF contenant les indices, puis tente d'identifier le responsable.

## Auteur

- **Nom :** NIDBENALI DOUAA

## Fonctionnalités

- Page d'accueil avec présentation du site
- Navigation responsive adaptée aux ordinateurs et mobiles
- Page « À propos » présentant le projet
- Catalogue de neuf affaires criminelles
- Présentation détaillée de chaque enquête
- Téléchargement du dossier PDF de chaque affaire
- Page « Comment ça marche » en quatre étapes
- Formulaire de contact
- Footer avec liens rapides, réseaux sociaux et newsletter
- Affichage adapté aux écrans petits, moyens et larges

## Enquêtes disponibles

| # | Affaire | Lieu |
|---|---|---|
| 01 | Le thé de 22 heures | Manoir Valmont |
| 02 | La nuit du diamant | Bijouterie Aurélia |
| 03 | La disparue du bâtiment C | Campus universitaire |
| 04 | Dernier service au Figuier | Restaurant |
| 05 | La corde | Haute montagne |
| 06 | Nuit blanche en orthopédie | Hôpital |
| 10 | Le tunnel fantôme | Clinique Saint-Aubin |
| 11 | L'archive fantôme | Dossier numérique |
| 12 | Le testament de Cassel | Affaire familiale |

## Technologies utilisées

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- Google Fonts - IBM Plex Mono

## Démarrage

Le projet ne nécessite aucune installation de dépendances ni compilation.

1. Télécharger ou cloner le dépôt.
2. Ouvrir le dossier `BUREAU_047`.
3. Ouvrir `index.html` dans un navigateur web.

```text
BUREAU_047/
├── index.html
├── css-files/
│   └── style.css
├── html-files/
│   ├── about.html
│   ├── contact.html
│   ├── enquete.html
│   ├── process.html
│   └── enquetes-html/
├── images/
├── js-files/
│   └── enquetes.js
└── pdf-files/
```

Une meilleure expérience peut être obtenue avec l'extension **Live Server** de Visual Studio Code :

1. Ouvrir le dossier du projet dans VS Code.
2. Cliquer sur « Go Live » depuis l'extension Live Server.
3. Accéder à l'adresse locale indiquée par Live Server.

## Utilisation

1. Depuis l'accueil, sélectionner **EN SAVOIR PLUS** ou utiliser le menu **Enquête**.
2. Choisir une affaire dans la liste.
3. Lire l'historique de l'affaire.
4. Télécharger et analyser le dossier PDF.
5. Entrer le nom du responsable dans le formulaire prévu.
6. Utiliser la page **Comment ça marche** pour revoir les étapes.

## Remarque

Bootstrap, Bootstrap Icons et Google Fonts sont chargés depuis des CDN. Une connexion Internet est donc nécessaire pour afficher ces ressources externes.


## Bootstrap et responsive design

Les principales fonctionnalités Bootstrap utilisées sont :

- `navbar` et `navbar-expand-lg`
- `navbar-toggler` et `collapse`
- `container`, `row` et `col`
- Grilles responsives avec `row-cols-1`, `row-cols-md-2` et `row-cols-lg-3`
- Classes utilitaires `d-flex`, `ms-lg-auto`, `pt-*`, `mt-*` et `min-vh-100`
- Cartes, boutons, formulaires et groupes de champs

Le menu devient un menu déroulant sur les écrans mobiles. La grille des enquêtes passe successivement de une à deux puis trois colonnes selon la largeur de l'écran.

## Personnalisation CSS

La feuille [style.css](BUREAU_047/css-files/style.css) personnalise :

- la palette sombre avec accents verts
- la police IBM Plex Mono
- les boutons avec la classe `.btn-vert`
- les cartes des enquêtes
- les effets au survol
- les images des affaires
- le footer et les icônes sociales
- l'arrière-plan flouté de la page d'accueil
- les flèches verticales et horizontales entre les étapes

## Fichiers importants

- [Page d'accueil](BUREAU_047/index.html)
- [Liste des enquêtes](BUREAU_047/html-files/enquete.html)
- [Page À propos](BUREAU_047/html-files/about.html)
- [Comment ça marche](BUREAU_047/html-files/process.html)
- [Page de contact](BUREAU_047/html-files/contact.html)
- [Feuille de styles](BUREAU_047/css-files/style.css)
- [Script de vérification](BUREAU_047/js-files/enquetes.js)


