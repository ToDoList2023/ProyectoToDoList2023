import { useState } from "react";

export function Tarea(props) {
    
    const{tarea, onActualizarTarea, onBorrarTarea} = props
    
    const [editando, setEditando] = useState(false)

    const [isChecked, setIsChecked] = useState(tarea.completado);

    function modoCompletado() {
        onActualizarTarea({ id: tarea.id, completado: !tarea.completado });
  
    }

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        modoCompletado();
  };
    

    function ModoEdicionActivado() {

        const [valor, setValor] = useState(tarea.tarea)

        function handleChange(e) {
            const text = e.target.value
            setValor(text)
        }

       async function handleClick(e) {
            e.preventDefault()
            await onActualizarTarea({id: tarea.id, tarea: valor})
            setEditando(false)
        }


        return(
            <>
                <div className="checkTarea">
                    <input
                        type="checkbox"
                        className={tarea.completado ? "todoTarea spanSubrayada contenedotTareaOpaco" : "todoTarea"}
                        checked={isChecked}
                        onChange={handleOnChange}
                        value={tarea.completado}
                        id="checkbox"
                    />
                    <input
                        type="text"
                        onChange={handleChange}
                        value={valor} />
                </div>
                <div className="botones">
                    <button
                        className="btn btnEditar"
                        onClick={handleClick}>
                            GUARDAR
                    </button>

                    <button
                        className="btn btnBorrar"
                        onClick={() => onBorrarTarea(tarea.id)}>
                            BORRAR
                    </button>
                </div>

            </>
        );
    }

    function ModoEdicionDesactivado() {

        return(
            <>
                <div className="checkTarea">
                    <input
                        type="checkbox"
                        className= {tarea.completado ? "todoTarea spanSubrayada" : "todoTarea"}
                        checked={isChecked}
                        onChange={handleOnChange}
                        value={tarea.completado}
                        id="checkbox"
                    />
                    <span
                    className={tarea.completado ? "todoTarea spanSubrayada" : "todoTarea"}>
                        {tarea.tarea}</span>
                </div>
                <div className='botones'>
                    <button
                        className={tarea.completado ? "btn btnEditar btnEditarCompletado" : "btn btnEditar"}
                             onClick={() => setEditando(tarea.id)}>
                            EDITAR
                     </button>

                     <button
                        className={tarea.completado ? "btn btnBorrar btnBorrarCompletado" : "btn btnBorrar"}
                             onClick={() => onBorrarTarea(tarea.id)}>
                            BORRAR
                        </button>
                </div>
            </>
        );
    }

    return(
        <>
            <div className={tarea.completado ? "contenedorTarea contenedorTareaOpaco" : "contenedorTarea contenedorTareaClaro"} id={tarea.id}>
                {
                    editando
                    ? <ModoEdicionActivado />
                    : <ModoEdicionDesactivado />
                }
            </div>    
        </>
    );
}