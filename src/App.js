import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { SnackbarProvider } from 'notistack'
import Dashboard from "./Pages/Dashboard/Dashboard";
import List from "./Pages/List/List";
import Category from "./Pages/Category/Category";
import Subcategory from "./Pages/Subcategory/Subcategory";
import Supplier from "./Pages/Supplier/Supplier";
import Profile from "./Pages/Profile/Profile";
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
        <Route path="/list" element={<List/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/subcategory" element={<Subcategory/>}/>
        <Route path="/supplier" element={<Supplier/>}/>
        <Route path="/profile" element={<Profile/>}/>
        
      </Routes>
    </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
