export function Formulario (props){

    const {tarea, handleSubmit, handleChange} = props

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Introduce la tarea" 
                onChange={handleChange}
                value={tarea}
                />

            <button
                type="submit"
                className="btnAgregar"
                value="AGREGAR"
                onClick={handleSubmit}>
                AGREGAR
            </button>
        </form>
    );
}
