const { table } = require('console');
const fs = require('fs');
const colors = require('colors');

const createTable = async ( base  = 5, list, factor ) => {
    console.clear();

    let exit = ''

    for (let i = 1; i <= factor ; i++) {
        exit += `${ base } x ${ i } = ${ base * i}\n`
    }

    if ( list ) {
        console.log('==============================='.red)
        console.log('       Tablal del', base);
        console.log('==============================='.red)
        console.log(colors.green(exit))
    }

   fs.writeFileSync(`./salida/tabla-del-${base}-hasta-${factor}.txt`, exit)
   return `table-${base}.txt`

}

module.exports = {
    createTable
}