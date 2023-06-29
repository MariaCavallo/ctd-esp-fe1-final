import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './filtros.css';
import { thunkFilterCharacter } from '../../thunk/Middleware';
import { setFilter } from '../../redux/reducers/charactersReducer';

/**
 * ## Componente Filtros
 * En este componente se generan los filtros para despues realizar la filtracion en el input
 * @example
 * <filtros.componente />
 * @module filtros.componente
 * @author @MariaCavallo
*/


const Filtros = () => {

    const filter = useAppSelector(state => state.characters.filter)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (filter !== undefined) {
            dispatch(thunkFilterCharacter(filter))
        }
    }, [dispatch, filter])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <div className="filtros">
            <label htmlFor="nombre">Filter by name:</label>
            <input 
                onChange={onChange}
                value={filter}
                type="text" 
                placeholder="Rick, Morty, Beth, Alien, ...etc"
                name="nombre" 
            />
        </div>
    )
}

export default Filtros;