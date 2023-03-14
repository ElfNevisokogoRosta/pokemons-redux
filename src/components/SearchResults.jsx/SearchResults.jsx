import { Pokemon } from 'components/Pokemon/Pokemon';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { resetPage } from 'redux/reducer';

export const SearchResults = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.query}`;

  return (
    <>
      <button
        onClick={() => {
          dispatch(resetPage());
          navigate(`/`);
        }}
      >
        Home
      </button>
      <Pokemon url={url} />
    </>
  );
};
