import { useState } from "react";

export function Tarea(props) {
    
    const{tarea} = props

    const [editando, setEditando] = useState(false)


    
    return(
        <>
            <div className='contenedorTarea' id={tarea.id}>
                <span>{tarea.tarea}</span>
                <div className='botones'>
                    <button
                        className='btn btnEditar'>
                            EDITAR
                    </button>

                    <button
                        className='btn btnBorrar'>
                        BORRAR
                    </button>
                </div>
            </div>    
        </>
    );
}