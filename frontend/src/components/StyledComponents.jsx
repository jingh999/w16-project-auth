import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//Mainpage
export const MainpageContainer = styled.div`
  background-color: #d3af97;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #36443C;
  gap:20px;
  h1{
    margin: 0px;
  }
  h2{
    margin: 10px;
    font-size: 0.9em;
  }
  @media all and (min-width: 744px) {

  }
  @media all and (min-width: 1024px) {

  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-alight: center;
  margin: 10px;
`

export const GridContainer = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap:8px;
  justify-content: center
  margin: 10px 100px;
`

export const ImgItem = styled.div`
  img {
    height: 200px;
    object-fit: cover;
  }
`;

//Register and Login Page
export const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #36443C;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  h2{
    margin: 10px;
    font-size: 0.9em;
  }
`;

export const StyledH4 = styled.h4`
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
`;

export const FormBox = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 95px auto;
  align-items: center;
  color:#36443C;
`;

export const Label = styled.label`
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding-right: 30px;
`;

export const EyeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1em;
  color: #ccc;
`;

export const Button = styled.button`
  margin-top: 0.5rem;
  padding: 10px 30px;
  border-radius: 20px;
  border: none;
  background-color: white;
  color:#44554b;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color: #5a675f;
    background-color: lightgrey;
    transform: scale(1.05);
    transition: all ease 0.3s;
  }
`;

export const RemindText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  text-align: center;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  font-weight: normal;
  color: #36443C;
  text-decoration: none;
  margin-left: 5px;
  position: relative;
  text-decoration-line: underline;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 2px;
    bottom: -3px;
    background-color: #d3af97;
    transition: width 250ms ease-in;
  }

  &:hover {
    color:white;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const SignUpLink = styled(StyledLink)``;
export const SignInLink = styled(StyledLink)``;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: -0.5rem;
  margin-bottom: 0rem;
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-top: -0.5rem;
  margin-bottom: 0rem;
`;

export const RegisterContainer = styled.div`
  background-color: #d3af97;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #36443C;

  h2{
    margin: 10px;
    font-size: 0.9em;
  }
  @media all and (min-width: 744px) {

  }
  @media all and (min-width: 1024px) {

  }
`;

//Userpage
export const UserpageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d3af97;
  background-color: #36443C;
`;

export const ImgContainer = styled.div`
  img {
    height: 400px;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: center;
  margin: 20px;
  h4{
    margin: 4px;
    font-size: 1 em;
  }
`;

