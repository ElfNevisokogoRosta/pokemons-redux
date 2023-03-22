import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  border-radius: 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 1;
`;
const Tittle = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 18px;
`;
const FontImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 140px;
`;
const TypeList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;
const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin: 10px 15px;
`;
const StatElement = styled.li`
  display: flex;
  justify-content: space-between;
`;
const StatName = styled.span`
  display: block;
  text-align: left;
  padding-left: 5px;
`;
const StateValue = styled.span`
  display: block;
  text-align: right;
  padding-right: 5px;
`;
const TypeElements = styled.li`
  width: 100%;
  text-align: center;
  ${props => {
    switch (props.children?.props.children) {
      case 'normal':
        return `background-color: #919AA2;`;
      case 'fire':
        return `background-color: #FF9D55;`;
      case 'water':
        return `background-color: #5090D6;`;
      case 'grass':
        return `background-color: #63BC5A;`;
      case 'electric':
        return `background-color: #F4D23C;`;
      case 'ice':
        return `background-color: #73CEC0;`;
      case 'fighting':
        return `background-color: #CE416B;`;
      case 'poison':
        return `background-color: #B567CE;`;
      case 'ground':
        return `background-color: #D97845;`;
      case 'flying':
        return `background-color: #89AAE3;`;
      case 'psychic':
        return `background-color: #FA7179;`;
      case 'bug':
        return `background-color: #91C12F;`;
      case 'rock':
        return `background-color: #C5B78C;`;
      case 'ghost':
        return `background-color: #5269AD;`;
      case 'dragon':
        return `background-color: #0B6DC3;`;
      case 'dark':
        return `background-color: #5A5465;`;
      case 'steel':
        return `background-color: #5A8EA2;`;
      case 'fairy':
        return `background-color: #EC8FE6;`;
      default:
        return `background-color: #BFBFBF;`;
    }
  }}
`;

const Background = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  fill: #bfbfbf;
  z-index: -1;
`;
export {
  Container,
  Tittle,
  FontImage,
  TypeList,
  TypeElements,
  StatsList,
  StatElement,
  StatName,
  StateValue,
  Background,
};
