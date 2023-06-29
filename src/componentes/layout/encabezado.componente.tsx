import {Link} from "react-router-dom";
import './encabezado.css';

/**
 * ## Componente Encabezado
 * En este componente se contiene los links para navegar entre las páginas
 * @example
 * <Encabezado />
 * @module Encabezado
 * @author @MariaCavallo
 */
const Encabezado = () => {

    return (
        <header>
                <div>
                    <div>
                        <h2>Examen Final de Frontend IV</h2>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/favoritos">Favorites</Link></li>
                            <li><Link to="/detalle">Details</Link></li>
                        </ul>
                    </nav>
                </div>
        </header>
    )
}

export default Encabezado