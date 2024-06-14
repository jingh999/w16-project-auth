import {
  RegisterContainer,
  Form,
  FormBox,
  Label,
  InputWrapper,
  Input,
  EyeIcon,
  Button,
  RemindText,
  BoldText,
  SignInLink,
  ErrorMessage,
  SuccessMessage,
} from "./StyledComponents";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setSuccessMessage(
          "Account created successfully. You can now proceed to log in."
        );
        setErrorMessage("");

        navigate("/", {
          state: {
            successMessage:
              "Account created successfully. You can now proceed to log in",
          },
        });
      } else {
        console.error("Registration failed:", data);
        setErrorMessage("Registration failed. Please try again.");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <RegisterContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Create your account</h1>
        <FormBox>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placehoder="Enter your user name" // Why not showing?
            maxLength={40}
          />
        </FormBox>

        <FormBox>
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placehoder="Enter your email address" // Why not showing?
            maxLength={40}
          />
          
        </FormBox>

        <FormBox>
          <Label htmlFor="password">Password:</Label>
          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter a password"
              maxLength={20}
            />
            <EyeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
            />
          </InputWrapper> 
        </FormBox>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit">Register</Button>
        <RemindText>
          <BoldText>Already have an account?</BoldText>
          <SignInLink to="/">Log in</SignInLink> instead!
        </RemindText>
      </Form>
    </RegisterContainer>
  )
}