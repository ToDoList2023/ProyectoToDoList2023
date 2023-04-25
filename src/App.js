import { useEffect, useState } from 'react';
import './App.css';
import {Formulario} from '../src/Componentes/Formulario';
import {Tarea} from '../src/Componentes/Tarea';
import {agregarNuevaTarea, editarTarea, eliminarTarea, mostrarTareas } from '../src/services/serviceAxios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import icono from '../src/assets/img/icon.png'

const MySwal = withReactContent(Swal);

 
function App() {
  
  const [tarea, setTarea] = useState('');
  const [listadoTareas, setListadoTareas] = useState ([]);
  
  const obtenerTareas = async () => {
    const todasLasTareas = await mostrarTareas();
    setListadoTareas(todasLasTareas)
  }
  
  useEffect(() => {
    obtenerTareas();
  }, []);
  
  
  async function handleSubmit(e){
    
    e.preventDefault()
    
    
    if (tarea === '' ){
      
      MySwal.fire({       
        title: <p>¡Debes poner una tarea!</p>,     
        background: "#D9D9D9",        
        confirmButtonColor: "#9B3F3F",        
        allowOutsideClick: "true",     
       });
      return
    }

    await agregarNuevaTarea(tarea);
    setTarea('')
    await obtenerTareas();
    e.stopPropagation();
}

function handleChange(e){
    setTarea(e.target.value)
}



  async function onActualizarTarea({id, tarea, completado}) {
    await editarTarea({id, tarea, completado});
    await obtenerTareas();
  }

  async function onBorrarTarea(id) {
    await eliminarTarea(id)
    await obtenerTareas();
  }

  return (
    <>
      <div className='contenedorPrincipal'>
        <h1>HOSAODJASHDASJD</h1>

        <div className='contenedorFormulario'> 
          <Formulario 
          tarea= {tarea}
          handleSubmit= {handleSubmit}
          handleChange= {handleChange}/>
        </div>
        
        <div className='contenedorTareas'>
          <span className='logotipo'>
          <img className= 'icono' src={icono} alt="icon" /><h2> To-Do List </h2>
          </span>
        
          
          <div className='contenedorInfoTareas'>
            {
              listadoTareas.map(tarea => (
                <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea}
                  onActualizarTarea={onActualizarTarea}
                  onBorrarTarea={onBorrarTarea}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
