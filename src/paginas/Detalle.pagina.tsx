import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import { thunkToggleFavorites } from "../thunk/Middleware";
/**
 * ## Componente Detalle
 * En este componente se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * @example
 * <PaginaDetalle />
 * @module PaginaDetalle
 * @author @MariaCavallo
 */

const PaginaDetalle = () => {

    const { character, episodes, loading } = useAppSelector((state) => state.details)
    const favorites = useAppSelector(state => state.favorites)
    const dispatch = useAppDispatch()

    if (character.id === -1) {
        return (
            <div className="containerDetails">
                <h3>Select a character to see its details</h3>
                <Link to={"/"}>See the list of characters</Link>
            </div>
        )
    }

    return (
        <div className="container">
            <h3>{character.name}</h3>
            <div className={"detalle"}>
                <div className={"detalle-header"}>
                    <img src={character.image} alt={character.name}/>
                    <div className={"detalle-header-texto"}>
                        <p>Name: {character.name}</p>
                        <p>Planet: {character.planet}</p>
                        <p>Gender: {character.gender}</p>
                    </div>
                    <BotonFavorito
                        onClick={() => dispatch(thunkToggleFavorites(character.id))}
                        isFavorite={favorites.list.includes(character.id)}
                    />
                </div>
            </div>
            <h4>List of episodes where the character appeared</h4>
            <div className={"episodios-grilla"}>
                {loading ? (<div className="loading">Loading...</div>) : 
                    (episodes.map((episode) =>
                        <TarjetaEpisodio 
                            key={episode.id} 
                            episode={episode}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PaginaDetalle