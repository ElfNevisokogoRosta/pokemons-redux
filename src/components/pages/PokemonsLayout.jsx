/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { nextPage } from '../../redux/reducer';
import { useParams } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { SearchBar } from 'components/SearchBar/SearchBar';

export const PokemonsLayout = () => {
  const perPage = useSelector(state => state.perPage.perPage);
  const page = useSelector(state => state.page.page);
  const typeNumber = useSelector(state => state.typeNumber.typeNumber);
  const total = useSelector(state => state.total.total);
  const dispatch = useDispatch();

  const params = useParams();
  const handleNextPageClick = () => {
    dispatch(nextPage());
  };
  const hasMore = total > perPage * page;
  const hasMoreType = typeNumber > perPage * page;
  return (
    <>
      <Navigation />
      <SearchBar />
      <Outlet />

      {params.type === '' && hasMore && (
        <button onClick={handleNextPageClick}>Next page</button>
      )}
      {params.type !== '' && hasMoreType && (
        <button onClick={handleNextPageClick}>Next page</button>
      )}
    </>
  );
};
