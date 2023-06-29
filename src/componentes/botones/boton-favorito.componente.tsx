import './boton-favorito.css';

/**
 * ## Componente Boton Favorito
 * En este componente se muestra el boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * @example
 * <boton-favorito.componente />
 * @module boton-favorito.componente
 * @author @MariaCavallo
 */

interface BotonFavoritoProps {
    isFavorite: boolean,
    onClick: () => void
}

const BotonFavorito = ({ isFavorite, onClick }: BotonFavoritoProps) => {

    const srcImg = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return (
        <div onClick={onClick} className="boton-favorito">
            <img 
                src={srcImg}
                alt={"favorito"} 
            />
        </div>
    )
}

export default BotonFavorito;