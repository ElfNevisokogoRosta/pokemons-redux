import React from 'react';
import { Circles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useTypeData } from '../services/useTypeData';
import { useSelector, useDispatch } from 'react-redux';
import { perPageChange, pokeTypeSet, resetPage } from 'redux/reducer';
import {
  Header,
  Select,
  Input,
  Label,
  LabelContainer,
} from './Navigation.styled';

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
    <Header>
      {' '}
      <Select value={perPage} onChange={handlePageChange}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </Select>
      {loading ? (
        <Circles />
      ) : (
        <form>
          <LabelContainer>
            {types?.map((type, index) => {
              return (
                <Label key={`${type.name}-${index}`}>
                  {' '}
                  {type.name}{' '}
                  <Input
                    type="radio"
                    name="type"
                    value={type.name}
                    onClick={handleTypeChange}
                  />
                </Label>
              );
            })}
          </LabelContainer>
        </form>
      )}
    </Header>
  );
};
