import { Episode } from "../types/characters"

/**
 * Mapea los episodios de la API a episodios de tipo Episodio
 * @param episodesToMap 
 * @author @MariaCavallo 
 */
const episodesMap = (episodesToMap: Episode[]) => {
    return episodesToMap.map((episode: any) => ({
        id: episode.id,
        name: episode.name,
        air_date: episode.air_date,
        episode: episode.episode
    }))
}

/**
 * Obtiene los episodios de la API según el array de ids de episodios
 * @param array 
 * @author @MariaCavallo 
 */
export const getEpidosdesByArray = async (array: Array<number>) => {
    let data: Episode[] = []

    if (array.length > 0) {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${String(array)}`)
            .then((response) => response.json())
        
        if (response.length > 0) {
            data = episodesMap(response)
        } else {
            data = episodesMap([response])
        }
    }  
    return data;
}