# Société Wissam — INGCO Bénin

Site web officiel et catalogue interactif de la **Société Wissam**, distributeur exclusif de la marque d'outillage professionnel **INGCO au Bénin** (Abomey-Calavi).

---

## 🚀 Déploiement direct sur Vercel via GitHub

Ce projet est pré-configuré pour un déploiement instantané sur **Vercel** à partir de votre dépôt GitHub.

### 1. Pousser le projet sur votre GitHub

```bash
# 1. Initialiser git si ce n'est pas déjà fait
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Créer le commit initial
git commit -m "feat: site officiel societe wissam ingco benin"

# 4. Lier votre repo GitHub (remplacez par votre URL de repo)
git remote add origin https://github.com/VOTRE_PSEUDO/wissam-ingco-benin.git
git branch -M main
git push -u origin main
```

### 2. Déployer sur Vercel

1. Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous avec votre compte GitHub.
2. Cliquez sur **"Add New..."** → **"Project"**.
3. Sélectionnez le dépôt `wissam-ingco-benin`.
4. Vercel détecte automatiquement les paramètres :
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
5. Cliquez sur **"Deploy"**. En moins de 60 secondes, votre site est en ligne avec HTTPS et CDN mondial !

---

## 🛠️ Stack & Caractéristiques

* **Framework** : React 19 + TypeScript + Vite 8
* **Styles** : Tailwind CSS v4 (Thème clair haute lisibilité)
* **Icônes** : Lucide React
* **Configuration Vercel** : Fichier `vercel.json` inclus pour la gestion du routage SPA (`rewrites`) et le cache des assets statiques (`/images/*`).
* **Fonctionnalités** :
  - Catalogue complet avec recherche par mot-clé et code article (`ID8508`, `CAGLI2211532`, `HKTHP11151`, etc.)
  - Simulateur interactif de la plateforme 20V P20S (+580 outils pour 1 batterie)
  - Panier et générateur de devis en FCFA
  - Commande instantanée WhatsApp pré-remplie vers le service commercial (`+229 01 97 14 44 44`)
  - Édition et impression de Facture Proforma officielle (PDF / Impression A4)
  - Coordonnées, itinéraire GPS et horaires du showroom d'Abomey-Calavi

---

## 📞 Contacts & Référence

* **Société** : Société Wissam
* **Enseigne** : INGCO Bénin
* **Siège** : Abomey-Calavi, à côté de NSIA Banque, face Polyclinique Coopérative
* **Commercial / Commandes** : +229 01 97 14 44 44
* **Atelier SAV / Pièces** : +229 01 97 30 44 44
