const { crearArchivo } = require('./multiplicar/multiplicar');
//let base = 'abc';

//console.log(process.argv);

let argv = process.argv;

let pararms = argv[2];

let base = pararms.split('=')[1];


//console.log(base);
crearArchivo(base)
    .then(archivo => console.log(`El archivo creado: ${archivo}`))
    .catch(e => console.log(e));