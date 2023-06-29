import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetFilter } from "../redux/reducers/charactersReducer";

/**
 * ## Componente Pagina Inicio
 * Esta es la pagina principal. 
 * En este componente se podrá ver el panel de filtros junto con la grilla de personajes.
 * @example 
 * <PaginaInicio />
 * @module PaginaInicio
 * @author @MariaCavallo
 */

const PaginaInicio = () => {

    const { characters, loading } = useAppSelector(state => state.characters)
    const dispatch = useAppDispatch();

    return (
        <div className="container">
            <div className="actions">
                <h3>Character Catalog</h3>
                <button 
                    onClick={() => dispatch(resetFilter())}
                    className="danger"
                >
                    Clear filters
                </button>
            </div>
            <Filtros />
            <Paginacion />
            <div className="grilla-contenedor">
                {loading && characters.length > 0 && (<div>Loading...</div>)}
                <GrillaPersonajes characters={characters}/>
            </div>
            <Paginacion />
        </div>
    )
}

export default PaginaInicio