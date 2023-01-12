import { useState } from "react";

export function Tarea(props) {
    
    const{tarea, onActualizarTarea, onBorrarTarea} = props
    
    const [editando, setEditando] = useState(false)

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
  };
    
    function modoCompletado() {
        onActualizarTarea({ id: tarea.id, completado: !tarea.completado });

    }

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
                <input
                    type="checkbox"
                    className={tarea.completado ? "todoTarea spanSubrayada" : "todoTarea"}
                    onClick={() => modoCompletado()}
                    value={tarea.completado}
                    checked={!isChecked}
                    onChange={handleOnChange}
                 />
                <input
                    type="text"
                    onChange={handleChange}
                    value={valor} />

                <button
                    className="btn"
                    onClick={handleClick}>
                        GUARDAR
                </button>

                <button
                    className="btn btnBorrar"
                    onClick={() => onBorrarTarea(tarea.id)}>
                        BORRAR
                </button>
            </>
        );
    }

    function ModoEdicionDesactivado() {

        return(
            <>
                <input
                    type="checkbox"
                    className={tarea.completado ? "todoTarea spanSubrayada" : "todoTarea"}
                    onClick={() => modoCompletado()}
                    value={tarea.completado}
                    checked={!isChecked}
                    onChange={handleOnChange}
                 />
                <span
                className={tarea.completado ? "todoTarea spanSubrayada" : "todoTarea"}>
                    {tarea.tarea}</span>
                    <div className='botones'>
                        <button
                            className='btn btnEditar'
                                onClick={() => setEditando(tarea.id)}>
                                EDITAR
                        </button>

                        <button
                            className='btn btnBorrar'
                                onClick={() => onBorrarTarea(tarea.id)}>
                                BORRAR
                        </button>
                    </div>
            </>
        );
    }

    return(
        <>
            <div className='contenedorTarea' id={tarea.id}>
                {
                    editando
                    ? <ModoEdicionActivado />
                    : <ModoEdicionDesactivado />
                }
            </div>    
        </>
    );
}