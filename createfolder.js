const fs = require('fs');
const path = require('path');

// Spécifiez le nom du dossier que vous souhaitez créer
const folderName = 'MonDossierSurLeBureau';

// Obtenez le chemin complet du bureau
const bureauPath = path.join(require('os').homedir(), 'Desktop', folderName);

// Utilisez la fonction fs.mkdir() pour créer le dossier
fs.mkdir(bureauPath, { recursive: true }, (err) => {
  if (err) {
    console.error(`Erreur lors de la création du dossier : ${err}`);
  } else {
    console.log(`Dossier '${folderName}' créé avec succès sur le bureau.`);
  }
});
