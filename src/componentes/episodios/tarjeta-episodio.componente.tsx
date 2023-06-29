import { Episode } from '../../types/characters';
import './tarjeta-episodio.css';

/**
 * ## Componente Tarjeta Episodio 
 * En este componente se muestra la Tarjeta para cada episodio dentro de la vista de personaje.
 * @example
 * <tarjeta-episodio.componente />
 * @module tarjeta-episodio.componente
 * @author @MariaCavallo
 */

interface TarjetaEpisodioProps {
    episode: Episode;
}

const TarjetaEpisodio = ({ episode }: TarjetaEpisodioProps) => {
    

    return (
        <div className="tarjeta-episodio">
            <div>
                <h4>{episode.name}</h4>
                <span>({episode.episode})</span>
            </div>
            <span>Lanzado el: {episode.air_date}</span>
        </div>
    )
}

export default TarjetaEpisodio;