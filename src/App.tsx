import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { thunkCharactersFavorites, thunkEpisodes, thunkFavorites } from './thunk/Middleware';

function App() {

  const dispatch = useAppDispatch()
  const details = useAppSelector(state => state.details)
  const favorites = useAppSelector(state => state.favorites)

  useEffect(() => {
    dispatch(thunkFavorites())
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkCharactersFavorites())
  }, [dispatch, favorites.list])

  useEffect(() => {
    if (details.character.id !== -1) {
      dispatch(thunkEpisodes())
    }
  }, [details.character, dispatch])


  return (
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle" element={<PaginaDetalle />} />
      </Routes>
    </div>
  );
}

export default App;
