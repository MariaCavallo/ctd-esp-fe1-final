import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Character } from '../../types/characters';

/**
 * ## Grilla de Personajes
 * Este componente muestra y pagina todos los personajes
 * @module grilla-personaje.componente
 * @example
 * <grilla-personaje.componente />
 * @author @MariaCavallo
 */

interface GrillaPersonajesProps {
    characters: Array<Character>
}

const GrillaPersonajes = ({ characters }: GrillaPersonajesProps) => {

    return (
        <div className="grilla-personajes">
            {characters.map((character, index) => (
                <TarjetaPersonaje 
                    key={index}
                    character={character}
                />
            ))}
        </div>
    )
}

export default GrillaPersonajes;