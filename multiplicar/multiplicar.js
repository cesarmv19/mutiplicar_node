//requireds
const fs = require('fs');
//tipos de required
//const fs = require('express'); express es una libreria para node
//const fs = require('./path'); punto pleca y la ruta de nuestro archivo creado por nosotros


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let dato = '';

        for (let i = 1; i <= 10; i++) {
            let res = base * i;
            dato += `${base} * ${i} = ${res}\n`;

        }

        const data = new Uint8Array(Buffer.from(`${dato}`));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);

            //console.log(`El archivo tabla-${base}.txt ha sido creado.`);
        });
    });
}

module.exports = {
    crearArchivo
}