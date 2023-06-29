/**
 * Devuelve listado de favoritos en forma de array con los id's de personajes
 * @author @MariaCavallo
 */

export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
        return JSON.parse(favorites)
    }
    return []
}

/**
 * Añade un favorito al listado de favoritos
 * @author @MariaCavallo
 */
export const addFavorite = (favorite: number) => {
    let favorites = getFavorites()

    if (!favorites) {
        favorites = []
    }

    if (favorites.includes(favorite)) {
        return favorites
    }

    const newFavorites = [...favorites, favorite]
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    return newFavorites
}

/**
 * Elimina un favorito del listado de favoritos
 * @author @MariaCavallo
 */
export const removeFavorite = (favorite: number) => {
    const favorites = getFavorites()
    if (!favorites) {
        return []
    }

    if (!favorites.includes(favorite)) {
        return favorites
    }

    const newFavorites = favorites.filter((fav: number) => fav !== favorite)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))

    return newFavorites
}

/**
 * Añade o elimina un favorito del listado de favoritos, dependiendo de su estado actual
 * @author @MariaCavallo
 */
export const toggleFavorite = (favorite: number) => {
    const favorites = getFavorites()

    if (!favorites) {
        return addFavorite(favorite)
    }

    if (!favorites.includes(favorite)) {
        return addFavorite(favorite)
    }
    
    return removeFavorite(favorite)
}

/**
 * Resetea todos los favoritos del listado de favoritos
 * @author @MariaCavallo
 */
export const resetFavorites = () => {
    localStorage.removeItem('favorites')
    return []
}