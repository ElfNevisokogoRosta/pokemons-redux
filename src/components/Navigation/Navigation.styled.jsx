import styled from 'styled-components';

const Header = styled.header`
  padding-top: 30px;
  width: 100%;
  display: flex;
`;
const Select = styled.select`
  width: 100px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'%3E%3Cpath d='M8 12l8 8 8-8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
`;

const IconContainer = styled.svg`
  width: 44px;
  height: 44px;
  margin-right: 5px;
  display: flex;
`;
const SideBar = styled.nav`
  position: absolute;
  left: 40px;
  top: 30px;
`;
export { Header, Select, IconContainer, SideBar };
