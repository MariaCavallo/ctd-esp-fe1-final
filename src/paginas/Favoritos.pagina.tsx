import { Link } from "react-router-dom";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { thunkResetFavorites } from "../thunk/Middleware";
import "../App.css"

/**
 * ## Componente Favoritos
 * En este componente se ven todos los personajes marcados como favoritos
 * @example
 * <PaginaFavoritos />
 * @module PaginaFavoritos
 * @author @MariaCavallo
 */

const PaginaFavoritos = () => {

    const favorites = useAppSelector(state => state.favorites)
    const dispatch = useAppDispatch()

    if (favorites.list.length === 0) {
        return (
            <div className="containerFavs">
                <h3>You don't have favorite characters</h3>
                <Link to={"/"}>See the list of characters</Link>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="actions">
                <h3>Favorite characters</h3>
                <button 
                    className="danger"
                    onClick={() => dispatch(thunkResetFavorites())}
                >
                        Remove All
                </button>
            </div>
            <GrillaPersonajes characters={favorites.characters}/>
        </div>
    )
}

export default PaginaFavoritos