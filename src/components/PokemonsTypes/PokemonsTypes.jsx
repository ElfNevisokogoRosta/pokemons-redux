import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Circles } from 'react-loader-spinner';
import { usePokemonsTypes } from 'components/services/usePokemonsTypes';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { useNavigate } from 'react-router-dom';
import { resetPage } from 'redux/reducer';
import { setPokeTypeNumber } from 'redux/reducer';
import { List } from '../Pokemons/Pokemons.styled';
import { HomeBtn } from './PokemonsTypes.styled';
export const PokemonsTypes = () => {
  const page = useSelector(state => state.page.page);
  const perPage = useSelector(state => state.perPage.perPage);
  const type = useSelector(state => state.type.type);
  const dispatch = useDispatch();

  const pokeNumber = Number(page) * perPage;
  const [loading, error, data] = usePokemonsTypes(type);

  useEffect(() => {
    dispatch(setPokeTypeNumber(data.length));
  });
  const pokemons = data?.slice(0, pokeNumber);
  const navigate = useNavigate();
  if (error) {
    return (
      <div>
        <HomeBtn
          onClick={() => {
            dispatch(resetPage());
            navigate(`/`);
          }}
        >
          Home
        </HomeBtn>
        Something went wrong
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <>
        <HomeBtn
          onClick={() => {
            dispatch(resetPage());
            navigate(`/`);
          }}
        >
          Home
        </HomeBtn>
        <p>No data for this type</p>
      </>
    );
  }

  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        <>
          <HomeBtn
            onClick={() => {
              dispatch(resetPage());
              navigate(`/`);
            }}
          >
            Home
          </HomeBtn>
          <List className="poke-list">
            {pokemons?.map((pokemon, index) => {
              return (
                <li key={`${pokemon.pokemon.name}+${index}`}>
                  <Pokemon url={pokemon.pokemon.url} />
                </li>
              );
            })}
          </List>
        </>
      )}
    </>
  );
};
