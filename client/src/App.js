import react,{useState} from 'react';
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Navbar from "./components/Navbar";
import { formControlClasses } from "@mui/material";
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import Contact from './pages/Contact';
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser? (<Container>
          <Navbar currentUser={currentUser}/>
          <Routes>
            <Route path="/" exact element={<Dashboard/>}/>
            <Route path="/workouts" exact element={<Workouts/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
          </Routes>
        </Container>)
          :
          (<container>
            <Authentication />
          </container>)}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
