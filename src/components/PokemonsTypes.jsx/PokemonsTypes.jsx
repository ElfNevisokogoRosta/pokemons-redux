/* eslint-disable no-unused-vars */
import { usePokemonsTypes } from 'components/services/usePokemonsTypes';
import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import useLocalStorage from 'components/services/useLocalStorage';
import { Pokemon } from 'components/Pokemon/Pokemon';
import { connect } from 'react-redux';

const PokemonsTypes = ({ type }) => {
  const [typesPokemons, setTypesPokemonsLocally] = useLocalStorage(
    'typed-poke',
    []
  );
  const page = useSelector(state => state.page.page);
  const perPage = useSelector(state => state.perPage.perPage);

  const [loading, error, data] = usePokemonsTypes(type);
  const pokeNumber = Number(page) * perPage;
  const pokemons = typesPokemons?.slice(0, pokeNumber);

  return (
    <>
      {loading ? (
        <Circles />
      ) : (
        <ul className="poke-list">
          {pokemons?.map((pokemon, index) => {
            return (
              <li key={`${pokemon.pokemon.name}+${index}`}>
                <Pokemon url={pokemon.pokemon.url} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

const pokeStateToProps = state => {
  return {
    type: state.type.type,
  };
};
export default connect(pokeStateToProps)(PokemonsTypes);
