import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkNextCharacters, thunkPrevCharacters } from '../../thunk/Middleware';
import './paginacion.css';

/**
 * ## Componente de Paginacion
 * En este componente se contienen los botones para paginar todos los personajes de la grilla
 * @example
 * <paginacion.componente />
 * @module paginacion.componente
 * @author @MariaCavallo
 */
const Paginacion = () => {

    const { prev, next } = useAppSelector((state) => state.characters)
    const dispatch = useAppDispatch()

    const prevDisable = prev === null;
    const nextDisable = next === null;

    const handlePrev = () => {
        dispatch(thunkPrevCharacters())
    }

    const handleNext = () => {
        dispatch(thunkNextCharacters())
    }

    return (
        <div className="paginacion">
            <button 
                className={"primary"}
                onClick={handlePrev}
                disabled={prevDisable}
            >
                Anterior
            </button>
            <button 
                className={"primary"}
                onClick={handleNext}
                disabled={nextDisable} 
            >
                Siguiente
            </button>
        </div>
    )
}

export default Paginacion;