const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check((argv, option)=>{
                    if ( isNaN( argv.b ) ) {
                        throw 'El numero a multiplicar '
                    }
                    return true;
                })
                .option('l',{
                    alias:'list',
                    type:'boolean',
                    default:false,
                    describe:'Lista la tabla creada en la terminal'
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    default:10,
                    describe:'Cantidad de numeros a multiplicar'
                })
                .argv;

module.exports = argv