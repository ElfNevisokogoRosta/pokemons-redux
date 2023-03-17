import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, SearchField, SearchBtn } from './SearchBar.styled';
export const SearchBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          console.log(e.target.q.value);
          if (e.target.q.value !== '') {
            navigate(`/search/${e.target.q.value}`);
          }
        }}
      >
        <FormContainer>
          <SearchField type="text" name="q" placeholder="Enter pokemon name" />
          <SearchBtn>Search</SearchBtn>
        </FormContainer>
      </form>
    </>
  );
};
