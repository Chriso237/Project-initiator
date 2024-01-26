const yargs = require('yargs')
const create = require('./utils/functions')

yargs.command({
    command: 'create-project',
    describe: 'Create a new file',
    builder: {
        name:{
            describe: 'Name of the project',
            demandOption: true,
            type: 'string'
        },
        mvc:{
            describe: 'Use MVC pattern or not',
            demandoption: true,
            type: 'boolean'
        },
        /*date:{
            desribe: 'Date of creation',
            demandOption:true,
            type:'string'
        }*/

    },
    handler(argv){
        create.createFolder(argv.name)
        create.createFiles(argv.mvc)
    }
})

yargs.parse()

//console.log(yargs.argv.name);