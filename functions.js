const { log } = require('console');
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
//const yargs = require('yargs')

log(process.argv[3])
const bureauPath = path.join(require('os').homedir(), 'Desktop');
const createFolder = (name) => {
   

// Spécifiez le nom du dossier que vous souhaitez créer
    //const folderName = 'MonDossierSurLeBureau';

// Obtenez le chemin complet du bureau
    

// Utilisez la fonction fs.mkdir() pour créer le dossier
    fs.mkdir(`${bureauPath}/${name}`, { recursive: true }, (err) => {
        if (err) {
            console.error(`Erreur lors de la création du dossier : ${err}`);
        }else {
            console.log(`Dossier '${name}' créé avec succès sur le bureau.`);
            //log(bureauPath)
        }
        //bureauPath = path.join(require('os').homedir(), 'Desktop', name);

    });
    //return bureauPath
}



const createFiles = (mvc,/*date*/) => {
    if (!mvc) {
        fs.writeFileSync(`${bureauPath}/${yargs.argv.name}/index.php`,'<?php \n //write code here \n ?>')
    }
}

module.exports = {
    createFiles: createFiles,
    createFolder: createFolder
}


