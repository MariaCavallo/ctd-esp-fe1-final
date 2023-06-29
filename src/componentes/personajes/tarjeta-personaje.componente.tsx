import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { Character } from '../../types/characters';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { thunkToggleFavorites } from '../../thunk/Middleware';
import { setDetails } from '../../redux/reducers/detailsReducer';

/**
 * ## Componente Tarjeta Personaje 
 * En este componente se muestra la Tarjeta para cada personaje dentro de la vista de todos los personajes.
 * @example
 * <tarjeta-personaje.componente />
 * @module tarjeta-personaje.componente
 * @author @MariaCavallo
 */

interface TarjetaPersonajeProps {
    character: Character;
}

const TarjetaPersonaje = ({ character }: TarjetaPersonajeProps) => {

    const dispatch = useAppDispatch()
    const favoritesState = useAppSelector(state => state.favorites)
    const navigate = useNavigate()

    const onClickFavorite = () => {
        dispatch(thunkToggleFavorites(character.id))
    }

    const onClickImage = () => {
        dispatch(setDetails(character))
        navigate("/detalle")
    }

    const isFavorite = favoritesState.list.includes(character.id);

    return (
        <div className="tarjeta-personaje">
            <img 
                src={character.image} 
                alt={character.name} 
                onClick={onClickImage}
            />
            <div className="tarjeta-personaje">
                <div className="tarjeta-personaje-body">
                    <span>{character.name}</span>
                    <BotonFavorito 
                        onClick={onClickFavorite} 
                        isFavorite={isFavorite}
                    />
                </div>
            </div>
        </div>
    )
}

export default TarjetaPersonaje;