export function Tarea(props) {
    
    const{tarea} = props

    return(
        <>
            <div className='contenedorTarea' id={tarea.id}>
                <h1>{tarea.tarea}</h1>
            </div>    
        </>
    );
}