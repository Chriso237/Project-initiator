const { log } = require('console');
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const bureauPath = path.join(require('os').homedir(), 'Desktop');



const mvcGenerator = (x) => {
    fs.mkdir(`${bureauPath}/${yargs.argv.name}/${x}`, {recursive: true}, (err) => {
        if(err) {
            log("Une erreur s'est produite lors de la création du dossier: " + err)
        }else{
            log(`Dossier ${x} créé avec succès` )
        }
    })
    console.log('ok')
}

module.exports = mvcGenerator
