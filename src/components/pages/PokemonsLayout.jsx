/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { nextPage } from '../../redux/reducer';
import { Navigation } from 'components/Navigation/Navigation';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { NextPageBtn } from './PokemonsLayout.styled';
export const PokemonsLayout = () => {
  // initial global reducer
  const { total, typeNumber, perPage, page } = useSelector(
    state => state.pokemon
  );
  const dispatch = useDispatch();
  const params = useParams();
  const handleNextPageClick = () => {
    dispatch(nextPage());
  };
  const hasMore = total > page * perPage;
  const hasMoreType = typeNumber > page * perPage;
  return (
    <>
      <Navigation />
      <SearchBar />
      <Outlet />
      {!params.query
        ? (params.query === undefined && hasMore && (
            <NextPageBtn onClick={handleNextPageClick}>Next page</NextPageBtn>
          )) ||
          (params.type !== undefined && hasMoreType && (
            <NextPageBtn onClick={handleNextPageClick}>Next page</NextPageBtn>
          ))
        : ''}
    </>
  );
};
