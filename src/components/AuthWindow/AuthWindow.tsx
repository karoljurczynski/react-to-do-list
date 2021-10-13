// IMPORTS


import React, { SetStateAction, useState } from "react";
import AuthInput from "../_reusables/AuthInput/AuthInput";
import Button from "../_reusables/Button/Button";
import { Wrapper, Heading, Form, Text, BackButton, BackArrow } from "./AuthWindowStyles";
import back from '../../images/back.png';
import { useDispatch } from "react-redux";
import { setIsLogged, setToken } from "../../redux/actions/userActions";
import { Dispatch } from "redux";


// COMPONENT


const AuthWindow: React.FC = (): JSX.Element => {

  
  // STATE


  const setState: Dispatch<any> = useDispatch();
  const [isLoginWindow, setIsLoginWindow]: [boolean, React.Dispatch<SetStateAction<boolean>>] = useState<boolean>(true);
  const [login, setLogin]: [string, React.Dispatch<SetStateAction<string>>] = useState<string>("");
  const [identifier, setIdentifier]: [string, React.Dispatch<SetStateAction<string>>] = useState<string>("");
  const [password, setPassword]: [string, React.Dispatch<SetStateAction<string>>] = useState<string>("");
  const [email, setEmail]: [string, React.Dispatch<SetStateAction<string>>] = useState<string>("");
  const [confirmPassword, setConfirmPassword]: [string, React.Dispatch<SetStateAction<string>>] = useState<string>("");


  // ASYNC FUNCTIONS


  const logInUser = async (): Promise<void> => {
    const url: string = "https://recruitment.ultimate.systems/auth/local";
    const requestData: {method: string, headers: {[key: string]: string}, body: string} = {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "identifier": identifier,
        "password": password
      })
    };

    try {
      const data: Response = await fetch(url, requestData);
      if (data.status === 200 && data.ok) {
        const user: any = await data.json();
        setState(setToken(user.jwt));
        setState(setIsLogged());
      }
      else {
        throw new Error("Invalid data!");
      }
    }
    catch (e: unknown) {
      window.alert(`Cannot log in user. Error: ${e}`);
    }
  }
  const registerUser = async (): Promise<void> => {
    const url: string = "https://recruitment.ultimate.systems/auth/local/register";
    const requestData: {method: string, headers: {[key: string]: string}, body: string} = {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "username": login,
        "email": email,
        "password": password
      })
    };

    try {
      const data: Response = await fetch(url, requestData);
      if (data.status === 200 && data.ok) {
        const user: any = await data.json();
        setState(setToken(user.jwt));
        setState(setIsLogged());
      }
      else {
        throw new Error("Invalid data!");
      }
    }
    catch (e: unknown) {
      window.alert(`Cannot register user. Error: ${e}`);
    }
  }


  // HANDLERS 


  const handleLoginButton = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    await logInUser();
  }
  const handleRegisterButton = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    if (password === confirmPassword) {
      await registerUser();
    }
    else {
      window.alert("Passwords are not the same!");
    }
  }
  const checkIfRegisterFormIsCompleted = (): boolean => {
    if ((login.length > 0) && 
        (password.length > 0) && 
        (email.length > 0) && 
        (confirmPassword.length > 0))
      return true;
    else
      return false;
  }
  const checkIfLoginFormIsCompleted = (): boolean => {
    if ((identifier.length > 0) && 
        (password.length > 0))
      return true;
    else
      return false;
  }
  const handleModeChange = (): void => {
    setIsLoginWindow(!isLoginWindow);
  }
  const handleInputChange = (e: React.SyntheticEvent): void => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    switch (target.id) {
      case "identifier": setIdentifier(target.value); break;
      case "email": setEmail(target.value); break;
      case "password": setPassword(target.value); break;
      case "login": setLogin(target.value); break;
      case "confirmPassword": setConfirmPassword(target.value); break;
    }
  }


  // JSX


  return (
    <Wrapper>


      { isLoginWindow


        ? <>
            <Heading loginWindow>Login</Heading>
            <Form>
              <AuthInput 
                id="identifier" 
                value={ identifier } 
                type="text"
                onChange={ handleInputChange } 
                placeholder="Email or Username">
              </AuthInput>
              <AuthInput 
                id="password" 
                value={ password } 
                type="password"
                onChange={ handleInputChange } 
                placeholder="Password">
              </AuthInput>
              <Button width={ 315 } height={ 89 } fontSize={ 36 } margin="64px 0" primary onClick={ handleLoginButton } disabled={ !checkIfLoginFormIsCompleted() }>Login</Button>
            </Form>
            <Text>or</Text>
            <Button width={ 378 } height={ 56 } fontSize={ 48 } margin="63px 0 0 0" tertiary onClick={ handleModeChange }>create an account</Button>
          </>


        : <>
            <BackButton onClick={ handleModeChange }>
              <BackArrow src={ back } />
            </BackButton>
            <Heading>Create an new account</Heading>
            <Form>
              <AuthInput 
                id="login" 
                value={ login } 
                type="text"
                onChange={ handleInputChange } 
                placeholder="Username">
              </AuthInput>
              <AuthInput 
                id="email" 
                value={ email } 
                type="text"
                onChange={ handleInputChange } 
                placeholder="Email">
              </AuthInput>
              <AuthInput 
                id="password" 
                value={ password } 
                type="password"
                onChange={ handleInputChange } 
                placeholder="Password">
              </AuthInput>
              <AuthInput 
                id="confirmPassword" 
                value={ confirmPassword } 
                type="password"
                onChange={ handleInputChange } 
                placeholder="Repeat password">
              </AuthInput>
              <Button width={ 315 } height={ 89 } fontSize={ 36 } margin="98px 0 0 0" primary onClick={ handleRegisterButton } disabled={ !checkIfRegisterFormIsCompleted() }>Create</Button>
            </Form>
          </>
      }

      
    </Wrapper>
  )
}


// EXPORT


export default AuthWindow;