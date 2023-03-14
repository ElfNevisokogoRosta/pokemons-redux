import { useDispatch, useSelector } from 'react-redux';
import { Circles } from 'react-loader-spinner';
import { usePokemonsTypes } from 'components/services/usePokemonsTypes';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { useNavigate } from 'react-router-dom';
import { resetPage } from 'redux/reducer';
import { setPokeTypeNumber } from 'redux/reducer';

export const PokemonsTypes = () => {
  const page = useSelector(state => state.page.page);
  const perPage = useSelector(state => state.perPage.perPage);
  const type = useSelector(state => state.type.type);
  const dispatch = useDispatch();

  const pokeNumber = Number(page) * perPage;
  const [loading, error, data] = usePokemonsTypes(type);
  const setPokeNumber = number => {
    dispatch(setPokeTypeNumber(number));
  };
  setPokeNumber(data.length);
  const pokemons = data?.slice(0, pokeNumber);
  const navigate = useNavigate();
  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        <>
          <button
            onClick={() => {
              dispatch(resetPage());
              navigate(`/`);
            }}
          >
            Home
          </button>
          <ul className="poke-list">
            {pokemons?.map((pokemon, index) => {
              return (
                <li key={`${pokemon.pokemon.name}+${index}`}>
                  <Pokemon url={pokemon.pokemon.url} />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};
