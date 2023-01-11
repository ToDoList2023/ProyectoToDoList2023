import { useEffect, useState } from 'react';
import './App.css';
import {Formulario} from '../src/Componentes/Formulario'
import {Tarea} from '../src/Componentes/Tarea'
import {agregarNuevaTarea, eliminarTarea, mostrarTareas } from '../src/services/serviceAxios'

function App() {

  const [tarea, setTarea] = useState('');
  const [listadoTareas, setListadoTareas] = useState ([])

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
      alert('DEBES DE PONER UNA TAREA')
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



  function onActualizarTarea(objEditarTarea) {
    const {id, tarea} = objEditarTarea

    const temp = [...listadoTareas]
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea

    setListadoTareas(temp)

  }

  async function onBorrarTarea(id) {
    await eliminarTarea(id)
    await obtenerTareas();
  }

  return (
    <>
      <div className='contenedorPrincipal'>
        <h1>To Do List</h1>

        <div className='contenedorFormulario'> 
          <Formulario 
          tarea= {tarea}
          handleSubmit= {handleSubmit}
          handleChange= {handleChange}/>
        </div>
        
        <div className='contenedorTareas'>
          <h2> Lista de Tareas</h2>
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
