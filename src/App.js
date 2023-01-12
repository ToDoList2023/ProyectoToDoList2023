import { useState } from 'react';
import './App.css';
import {Formulario} from '../src/Componentes/Formulario'
import {Tarea} from '../src/Componentes/Tarea'

function App() {

  const [tarea, setTarea] = useState('')
  const [listadoTareas, setListadoTareas] = useState ([])

  function handleSubmit(e){
    e.preventDefault()

    if (tarea === '' ){
      alert('DEBES DE PONER UNA TAREA')
      return
    }


  const nuevaTarea= {
    id: Date.now(),
    tarea: tarea,
    completado: false
  }

  const temp = [nuevaTarea, ...listadoTareas]
  setListadoTareas(temp)

  setTarea('')

  console.log(listadoTareas)

}

function handleChange(e){
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
          handleChange= {handleChange}/>
        </div>
        
        <div className='contenedorTareas'>
          <h2> To-Do List </h2>
          <div className='contenedorInfoTareas'>
            {
              listadoTareas.map(tarea => (
                <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
