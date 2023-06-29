import { CharacterState } from "../componentes/redux/reducers/charactersReducer"
import { Character } from "../types/characters"

/**
 * Mapea los personajes de la API a personajes de tipo personaje
 * @param charactersToMap 
 * @author @MariaCavallo
 */
const charactersMap = (charactersToMap: Character[]) => {
    return charactersToMap.map((character: any) => ({
        id: character.id,
        name: character.name,
        url: character.url,
        image: character.image,
        gender: character.gender,
        planet: character.origin.name,
        episodes: character.episode
    }))
}

/**
 * Obtiene los personajes de la API según la página
 * @param url 
 * @author @MariaCavallo 
 */
export const getCharactersByPage = async (url: string) => {
    const response = await fetch(url)
        .then((response) => response.json())
    const data: CharacterState = {
        next: response.info.next,
        prev: response.info.prev,
        characters: charactersMap(response.results),
        loading: false
    }
    return data;
}

/**
 * Obtiene los personajes de la API (primera página)
 * @author @MariaCavallo 
 */
export const getCharacters = async () => {
    return getCharactersByPage(`https://rickandmortyapi.com/api/character?page=1`)
}

/**
 * Obtiene los personajes de la API según el filtro
 * @param filter 
 * @author @MariaCavallo 
 */
export const getCharactersByFilter = async (filter: string) => {
    return getCharactersByPage(`https://rickandmortyapi.com/api/character/?name=${filter}&page=1`)
}

/**
 * Obtiene los personajes de la API según el array de id's
 * @param array 
 * @returns 
 */
export const getCharactersByArray =async (array: Array<number>) => {
    let data: Character[] = [];
    if (array.length > 0) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${String(array)}`)
            .then((response) => response.json())
        if (response.length > 0) {
            data = charactersMap(response)
        } else {
            data = charactersMap([response])
        }
    }
    return data;
}