export function Formulario (props){

    const {tarea, handleSubmit, handlechange} = props

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Introduce la tarea" 
                onChange={handlechange}
                value={tarea}
                />

            <input 
            type="submit"
            className="btn"
            value="AGREGAR"
            onClick={handleSubmit}/>
        </form>
    );
}