import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { SnackbarProvider } from 'notistack'
import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    autoHideDuration={3000}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Routes>
    </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
