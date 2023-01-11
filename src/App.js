import { useState } from 'react';
import './App.css';
import {Formulario} from '../src/Componentes/Formulario'

function App() {

  const [tarea, setTarea] =useState('')
  const [listadoTareas, setListadoTareas] = useState ([])

  function handleSubmit(e){
    e.preventDefault()

    if (tarea === '' ){
      alert('DEBES DE PONER UNA TAREA')
      return
    }


  const nuevaTarea= {
    id: Date.now(),
    terea: tarea,
    completado: false
  }

  const temp = [nuevaTarea, ...listadoTareas]
  setListadoTareas(temp)

  setTarea('')

  console.log(listadoTareas)

  }

  function handlechange(e){
    setTarea(e.target.value)
    console.log (tarea)

  }

  return (
    <>
    <div className='contenedorPrincipal'>
      <h1>To Do List</h1>

      <div className='contenedorFormulario'> 
       <Formulario 
       tarea= {tarea}
       handleSubmit= {handleSubmit}
       handlechange= {handlechange}/>

      </div>
      
       <div className='contenedorTareas'>
        <h2> Lista de Tareas</h2>
        <div className='contenedorInfoTareas'>

        </div>

       </div>


    </div>
    </>
  );
}

export default App;
