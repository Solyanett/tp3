const fs= require('fs');
const tareas=JSON.parse(fs.readFileSync('./db/tareas.json','utf-8'));
 

/*MODULO CON LAS FUNCIONES AGREGAR,LISTAR,GUARDAR, FILTRAR JSON DE LA APP TAREAS,*/
module.exports = {

    agregarTarea: function(titulo,estado='pendiente'){
        let nuevaTarea={
            titulo,
            estado
        }
        tareas.push(nuevaTarea);
        this.guardarJson(tareas);
        this.listarTareas();
     
    },
    
    listarTareas: function () {
        tareas.forEach(tarea=>{
            console.log(tarea);
        });
            
    },
    filtrarPorEstado : function(filtro){
        let tareasFiltradas = tareas.filter(tarea=> tarea.estado==filtro || tarea.titulo.includes(filtro));
        return console.log(tareasFiltradas)
    },
    

    guardarJson: (tareas)=> {
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas,null,2),'utf-8')
        
    }
        
    
}