import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;
const SearchField = styled.input`
  width: 300px;
  height: 42px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 12px;
  border: none;
  background-color: #fff6f6;
  font-size: 24px;
  border-radius: 6px;
  margin-right: 15px;
  &:focus {
    border: none;
  }
`;
const SearchBtn = styled.button`
  font-size: 18px;
  background-color: #b5e6ec;
  border: none;
  border-radius: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
  color: #6a6d6d;
  &:hover {
    background-color: #97babe;
    color: #fff;
  }
`;
export { FormContainer, SearchField, SearchBtn };
