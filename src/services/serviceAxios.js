import axios from 'axios';


const mostrarTareas = async () => {
    const respuesta = await axios.get('http://localhost:5000/tareas')
    return respuesta.data;
}

const agregarNuevaTarea = async (tarea) => {
    const respuesta = await axios.post('http://localhost:5000/tareas', { tarea: tarea, completado: false});
    return respuesta.data.json;
}

const editarTarea = async ({id, tarea, completado}) => {
    const peticion = {};
    if (tarea){
        peticion.tarea = tarea;
    }
    if (completado !== undefined){
        peticion.completado = completado;
    }
   
    const respuesta = await axios.patch(`http://localhost:5000/tareas/${id}`, {tarea: tarea, completado: completado});
    return respuesta;
}

const eliminarTarea = async(id) => {
    const respuesta = await axios.delete(`http://localhost:5000/tareas/${id}`);
    return respuesta;
}



export {
    mostrarTareas,
    agregarNuevaTarea, 
    editarTarea,
    eliminarTarea
}