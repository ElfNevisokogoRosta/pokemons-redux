import React from 'react';
import { Circles } from 'react-loader-spinner';

import { useTypeData } from '../services/useTypeData';
import { useSelector, useDispatch } from 'react-redux';
import { setPerPage, resetPage } from 'redux/reducer';
import { NavLink } from 'react-router-dom';
import { Header, Select, IconContainer, SideBar } from './Navigation.styled';
import sprites from '../../styles/sprites.svg';

export const Navigation = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, types] = useTypeData();
  const { perPage } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  const handlePageChange = e => {
    const newValue = Number(e.target.value);
    dispatch(resetPage());
    dispatch(setPerPage(newValue));
  };

  const typeIcon = type => {
    switch (type) {
      case 'normal':
        return <use href={`${sprites}#normal`} />;
      case 'dark':
        return <use href={`${sprites}#dark`} />;
      case 'electric':
        return <use href={`${sprites}#electric`} />;
      case 'fairy':
        return <use href={`${sprites}#fairy`} />;
      case 'fighting':
        return <use href={`${sprites}#fighting`} />;
      case 'ground':
        return <use href={`${sprites}#ground`} />;
      case 'ice':
        return <use href={`${sprites}#ice`} />;
      case 'physic':
        return <use href={`${sprites}#physic`} />;
      case 'poison':
        return <use href={`${sprites}#poison`} />;
      case 'rock':
        return <use href={`${sprites}#rock`} />;
      case 'steel':
        return <use href={`${sprites}#steel`} />;
      case 'water':
        return <use href={`${sprites}#steel`} />;
      case 'flying':
        return <use href={`${sprites}#flying`} />;
      case 'bug':
        return <use href={`${sprites}#bug`} />;
      case 'ghost':
        return <use href={`${sprites}#ghost`} />;
      case 'fire':
        return <use href={`${sprites}#fire`} />;
      case 'grass':
        return <use href={`${sprites}#grass`} />;
      case 'psychic':
        return <use href={`${sprites}#psyhic`} />;
      case 'dragon':
        return <use href={`${sprites}#dragon`} />;
      default:
        return <use href={`${sprites}#standart`} />;
    }
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
        <SideBar>
          {types?.map((type, index) => {
            return (
              <NavLink className="navLink" to={`/${type.name}`}>
                <IconContainer>{typeIcon(type.name)}</IconContainer>
                {type.name}
              </NavLink>
            );
          })}
        </SideBar>
      )}
    </Header>
  );
};
