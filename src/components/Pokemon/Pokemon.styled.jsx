import styled from 'styled-components';

const Container = styled.div`
  border-radius: 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7e8c1;
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
        return `background-color: #A8A878;`;
      case 'fire':
        return `background-color: #F08030;`;
      case 'water':
        return `background-color: #6890F0;`;
      case 'grass':
        return `background-color: #78C850;`;
      case 'electric':
        return `background-color: #F8D030;`;
      case 'ice':
        return `background-color: #98D8D8;`;
      case 'fighting':
        return `background-color: #C03028;`;
      case 'poison':
        return `background-color: #A040A0;`;
      case 'ground':
        return `background-color: #E0C068;`;
      case 'flying':
        return `background-color: #A890F0;`;
      case 'psychic':
        return `background-color: #F85888;`;
      case 'bug':
        return `background-color: #A8B820;`;
      case 'rock':
        return `background-color: #B8A038;`;
      case 'ghost':
        return `background-color: #705898;`;
      case 'dragon':
        return `background-color: #7038F8;`;
      case 'dark':
        return `background-color: #705848;`;
      case 'steel':
        return `background-color: #B8B8D0;`;
      case 'fairy':
        return `background-color: #EE99AC;`;
      default:
        return `background-color: #BFBFBF;`;
    }
  }}
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
};
