import axios from 'axios';


const mostrarTareas = async () => {
    const peticion = await axios.get('http://localhost:3000/tareas')
    console.log(peticion.tarea);
    
}







export {
    mostrarTareas 
}