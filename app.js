const moduloTareas=require ('./tareas/Tareas');
const process=require('process');

const comando= process.argv[2];

console.log("***********");
console.log("TAREAS");
console.log("-----------")

/*SWICH PARA INTERACTUAR CON EL USUARIO, Y GUIAR QUE DEBE PONER PARA GENERAR EL ARRAY DE TAREAS*/

switch (comando) {
    case 'agregar':
        /*INGRESA POR COMANDO Y VERIFICA SI INGRESA UN TITULO,ESTADO O LAS PALABRAS CLAVES PARA SEGUIR*/
        let titulo = process.argv[3];
        if(! titulo){
            console.log('Debes escribir un título');
        break;
        }
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado)
        break;
    case 'listar':
        console.log("La lista de tareas es:"); //MUESTRA LA LISTA CUANDO EL USUARIO LA SOLICITA
        moduloTareas.listarTareas()
        break;
    case 'filtrar':
        moduloTareas.filtrarPorEstado(process.argv[3])
        break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción") // SI EL USUARIO NO INGRESA NADA
        console.log('---------------')
        break;
    
    default:
        console.log("NO ENTIENDO LO QUE QUIERES HACER!!!!!!") //SI NO CUMPLE CON NINGUNA DE LAS CONDICIONES ANTERIORES
        console.log("---------------")

        break;
}


