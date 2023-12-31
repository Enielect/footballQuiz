import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavLink = styled(Link)`
  padding: 4px;
  text-align: center;
  color: white;
  border-radius: 5px;
  padding: 10px;
  text-decoration: none;
  background-color: green;
  border: 8px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 50px;
  border-radius: 50%;
  height: 50px;
  object-fit: cover;
`;

const Header = styled.div`
  border: 2px solid green;
  padding-inline: 1.5rem;
  border-radius: 13px;
  display: flex;
  justify-content: space-around;
  padding-block: 1.5rem;
  align-items: center;
`;

const QuestionPicker = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TimePicker = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 1.5rem;
`;

const StyledLeague = styled.div`
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 300px;
  margin: auto;
`;

const StyledWholePage = styled.div`
  padding-inline: 1.5rem;
  padding-top: 2rem;
  background-color: lightgreen;
  height: 100vh;
  font-family: "Merriweather Sans";
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
export {
  StyledNavLink,
  Img,
  Header,
  QuestionPicker,
  TimePicker,
  StyledLeague,
  StyledWholePage,
};
