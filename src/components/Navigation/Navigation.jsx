import React from 'react';
import { Circles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useTypeData } from '../services/useTypeData';
import { useSelector, useDispatch } from 'react-redux';
import { perPageChange, pokeTypeSet, resetPage } from 'redux/reducer';
export const Navigation = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, types] = useTypeData();
  const perPage = useSelector(state => state.perPage.perPage);
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
  return (
    <>
      {' '}
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
    </>
  );
};
