const yargs = require('yargs')
const fu = require('./functions')

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
        fu.createFolder(argv.name)
        fu.createFiles(argv.mvc)
    }
})

yargs.parse()

//console.log(yargs.argv.name);