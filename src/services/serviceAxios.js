import axios from 'axios';

const url = 'https://todolist-api-zdjd.onrender.com/tareas';
const mostrarTareas = async () => {
    const respuesta = await axios.get(url)
    return respuesta.data;
}

const agregarNuevaTarea = async (tarea) => {
    const respuesta = await axios.post(url, { tarea: tarea, completado: false});
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
   
    const respuesta = await axios.patch(`${url}/${id}`, {tarea: tarea, completado: completado});
    return respuesta;
}

const eliminarTarea = async(id) => {
    const respuesta = await axios.delete(`${url}/${id}`);
    return respuesta;
}



export {
    mostrarTareas,
    agregarNuevaTarea, 
    editarTarea,
    eliminarTarea
}