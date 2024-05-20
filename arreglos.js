function tarbajo1() {
    

let personas = ['diego', 'alberto', 'juan', 'ana', 'laura', 'sofia' ];
let numeros = [101, 20, 60, 50, 12, 0.5, 1.5, 12];


let suma = numeros.map((sumatoria) => `la suma es ${sumatoria + 2}`);
console.log(suma);
let resta = numeros.map((restar) => `la resta es ${restar - 2}`);
console.log(resta);
let multiplicacion = numeros.map((multiplicar) => `la multiplicacion es ${multiplicar * 2}`);
console.log(multiplicacion);
let division = numeros.map((dividir) => `la la division es ${dividir / 2}`);
console.log(division);

let saludos = personas.map((nombre) => ` Hola ${nombre}`);
console.log(saludos);
console.log(personas);
saludos.map((hola) => {
    console.log(hola);
});
};



let estudiantes = [{
    'nombre':'juan',
    'apellido':'Robles',
    'edad':'23',
    'carrera':'sistemas'
},{
    'nombre':'Laura',
    'apellido':'Juarez',
    'edad':'20',
    'carrera':'sistemas'
},{
    'nombre':'julio',
    'apellido':'Martinez',
    'edad':'25',
    'carrera':'sistemas'
}];

let estudys = estudiantes.map((valores) => {
    let {nombre, apellido, edad, carrera} = valores;
    alert(`Hola ${nombre} ${apellido} con ${edad}, de la carrera de ${carrera}`);
    //console.log(`Hola ${nombre} ${apellido} con ${edad}, de la carrera de ${carrera}`);
    
    
})




function ñaña() {
    let personas = ['diego', 'alberto', 'juan', 'ana', 'laura', 'sofia', ['perez', 'Lopez'] ];

    let [nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7] = personas;
    let [ap1, ap2] = nombre7;
    console.log(`Hola ${nombre2} ${ap1} ${ap2}`);
    console.log(nombre2 = 'jose');
    console.log(personas[1]);
    
}


class ola {
    metodo1 () {
        console.log('hola');
    }
    metodo2 () {
        console.log('ears');
    }
}
let objeto = new ola();
objeto.metodo2();