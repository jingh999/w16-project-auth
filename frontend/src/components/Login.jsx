import {
  Container,
  Form,
  FormBox,
  Label,
  InputWrapper,
  Input,
  EyeIcon,
  Button,
  RemindText,
  BoldText,
  SignUpLink,
} from "./StyledComponents";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const togglePasswordVisibility = () =>{
    setShowPassword(!showPassword);
  }

  const handleLoginSubmit = () => {
    //post methode to post API

    //message of successful or error

    //navigate to userpage and necessary message
    Navigate("/userpage", {
      state:{

      },
    });
  }
    //error message

    
  return (
    <Container>
      <Form onSubmit={handleLoginSubmit}>
        <h2>LOG IN TO YOUR ACCOUNT</h2>
        <FormBox>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            maxLength={40}
          />
        </FormBox>

        <FormBox>
          <Label htmlFor="password">Password</Label>
          <InputWrapper>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              maxLength={20}
            />
            <EyeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
            />
          </InputWrapper>
        </FormBox>
        <Button type="submit">Log in</Button>
        <RemindText>
          <BoldText>Don't have an account?</BoldText>
          <SignUpLink to="/register">Sign up</SignUpLink> here!
        </RemindText>
      </Form>
    </Container>
  )
}