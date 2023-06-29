export interface Character {
    id: number,
    name?: string,
    url?: string,
    image?: string,
    species?: string,
    gender?: string,
    planet?: string,
    episodes?: Episode[],
}

export interface Episode {
    id: number,
    name?: string,
    air_date?: string,
    episode: string
}