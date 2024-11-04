# Angular Library Manager

**Statut** : 🚧 *En développement* 🚧

## Description

Angular Library Manager est une application front-end développée avec **Angular 18** et **Angular Material**. Son objectif est de fournir une interface utilisateur pour gérer et manipuler les données d'une bibliothèque en interagissant avec les endpoints d'une API (projet lié : [API-library-spring](https://github.com/nom-utilisateur/API-library-spring)).

L'application met en avant l'utilisation des **Reactive Forms** d'Angular, en respectant les bonnes pratiques de gestion de formulaires pour garantir une expérience utilisateur fluide et performante. Angular Material est intégré pour créer une interface esthétique, accessible et moderne.

## Fonctionnalités

- **Gestion des formulaires** avec Reactive Forms : création, modification et suppression d'entrées de la bibliothèque.
- **Récupération et manipulation des données** via les endpoints de l'API (projet lié : API-library-spring).
- **Rendu visuel** grâce à Angular Material pour garantir une interface intuitive et ergonomique.

> :warning: *Ce projet est en cours de développement, certaines fonctionnalités peuvent ne pas être entièrement disponibles ou finalisées.*

## Prérequis

- [Node.js](https://nodejs.org/) (v16+ recommandé)
- [Angular CLI](https://angular.io/cli) (v18 compatible)
- [API-library-spring](https://github.com/nom-utilisateur/API-library-spring) : Ce backend est requis pour le bon fonctionnement de l'application.

## Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/nom-utilisateur/angular-library-manager.git
   cd angular-library-manager
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configurer l'URL de l'API**

   Dans le fichier `environment.ts`, configurez l'URL de l'API pour pointer vers l'API de votre projet [API-library-spring](https://github.com/nom-utilisateur/API-library-spring).

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8080/api' // exemple d'URL de l'API
   };
   ```

4. **Lancer le projet**

   ```bash
   ng serve
   ```

   L'application sera accessible sur `http://localhost:4200`.

## Technologies Utilisées

- **Angular 18** : Framework principal pour le développement de l'application.
- **Angular Material** : Librairie de composants pour le design de l'interface utilisateur.
- **Reactive Forms** : Module d'Angular pour la gestion avancée des formulaires.
- **API REST** : Communication avec le backend [API-library-spring](https://github.com/nom-utilisateur/API-library-spring).

## Bonnes Pratiques

- **Gestion des formulaires** : Utilisation des Reactive Forms pour une manipulation efficace des données et une validation côté client.
- **Modularité** : Le projet est structuré en modules pour une meilleure maintenabilité et évolutivité.
- **Composants réutilisables** : Utilisation de composants Angular Material et de composants personnalisés pour favoriser la réutilisabilité du code.

## Contribution

Les contributions sont les bienvenues ! Veuillez consulter les issues du projet pour connaître les tâches en cours.

1. **Forker** le dépôt.
2. **Créer une branche** pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. **Commiter** vos changements (`git commit -m 'Add some AmazingFeature'`).
4. **Pousser** sur la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une **Pull Request**.

## License

Ce projet est sous licence MIT. Pour plus de détails, consultez le fichier `LICENSE`.

## Auteurs

- [Tony La Poche](https://github.com/tonylapocher) - Développeur principal
- [portfolio](https://antoineterrade.com) - Portfolio de Antoine Terrade (alias TonyLaPoche)
---

