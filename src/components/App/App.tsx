// IMPORTS


import AuthWindow from "../AuthWindow/AuthWindow";
import Dashboard from "../Dashboard/Dashboard";
import { Wrapper, Header, Heading, LogoutButton, LogoutIcon } from "./AppStyles";
import logout from "../../images/logout.png";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogged, setToken } from "../../redux/actions/userActions";
import { Dispatch } from "redux";
import { StateInterface } from "../../redux/store/reduxStore";


// COMPONENT


const App: React.FC = (): JSX.Element => {

  
  // STATE


  const state: StateInterface = useSelector((store: StateInterface) => store);
  const setState: Dispatch<any> = useDispatch();


  // HANDLERS 


  const handleLogOut = (): void => {
    setState(setIsLogged(false));
    setState(setToken(""));
    document.cookie = JSON.stringify({ token: "", isLogged: false });
  }


  // JSX


  return (
    <Wrapper>
      
      <Header>
        <Heading>ToDo-List</Heading>
          { state.user.isLogged && 
            <LogoutButton onClick={handleLogOut}>
              <LogoutIcon src={logout} />
            </LogoutButton>
          }
      </Header>
      
      { state.user.isLogged 
        ? <Dashboard />
        : <AuthWindow />
      }

    </Wrapper>
  )
}


// EXPORT


export default App;