/* eslint-disable no-unused-vars */
import { Circles } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import {
  perPageChange,
  nextPage,
  pokeTypeSet,
  resetPage,
} from '../redux/reducer';
import { Pokemons } from './Pokemons/Pokemons';
import { useTypeData } from './services/useTypeData';
export const App = () => {
  const perPage = useSelector(state => state.perPage.value);
  const dispatch = useDispatch();
  const handlePageChange = e => {
    const newValue = Number(e.target.value);
    dispatch(resetPage());
    dispatch(perPageChange(newValue));
  };
  const handleTypeChange = e => {
    dispatch(resetPage());
    dispatch(pokeTypeSet(e.target.value));
  };
  const [loading, error, types] = useTypeData();
  return (
    <>
      <select value={perPage} onChange={handlePageChange}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      {loading ? (
        <Circles />
      ) : (
        <form>
          {types?.map((type, index) => {
            return (
              <label key={`${type.name}-${index}`}>
                {' '}
                {type.name}{' '}
                <input
                  type="radio"
                  name="type"
                  value={type.name}
                  onClick={handleTypeChange}
                />
              </label>
            );
          })}
        </form>
      )}

      <ul className="poke-list">
        <Pokemons />
      </ul>
      <button
        onClick={() => {
          dispatch(nextPage());
        }}
      >
        next page
      </button>
    </>
  );
};
