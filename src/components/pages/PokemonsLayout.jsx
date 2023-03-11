/* eslint-disable no-unused-vars */
import { Circles } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
  perPageChange,
  nextPage,
  pokeTypeSet,
  resetPage,
} from '../../redux/reducer';
import { useNavigate } from 'react-router-dom';
import { usePokemonsTypes } from '../services/usePokemonsTypes';
import { useTypeData } from '../services/useTypeData';

export const PokemonsLayout = () => {
  const perPage = useSelector(state => state.perPage.value);
  const type = useSelector(state => state.type.type);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePageChange = e => {
    const newValue = Number(e.target.value);
    dispatch(resetPage());
    dispatch(perPageChange(newValue));
  };

  const handleTypeChange = e => {
    dispatch(resetPage());
    const type = e.target.value;
    dispatch(pokeTypeSet(type));
    navigate(`/${type}`);
  };

  const [loading, error, types] = useTypeData();
  usePokemonsTypes(type);

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

      <Outlet />
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
