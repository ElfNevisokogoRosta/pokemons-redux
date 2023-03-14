import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          navigate(`/search/${e.target.q.value}`);
        }}
      >
        <input type="text" name="q" />
        <button>Search</button>
      </form>
    </>
  );
};
