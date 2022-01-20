import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

   const [ mode, setMode] = useState('light');
   const [ alert, setAlert] = useState(null);

   const showAlert = (message, type) =>{
       setAlert({
         msg: message,
         type: type,
       })
       setTimeout( ()=>{
         setAlert(null);
       }, 2000)
   }

   const ChangeTitle = () =>{
     
   }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
   }
   const toggleMode = (cls) =>{
     removeBodyClasses();
     document.body.classList.add('bg-'+cls)
     if(mode === 'light'){
       setMode('dark');
      document.body.style.backgroundColor = "#41424a";
      showAlert("Dark mode has been enabled", "success");
      //document.title = "TextUtils - dark-mode"
     }
     else{
       setMode('light');
       document.body.style.backgroundColor = "white";
       showAlert("Light mode has been enabled", "success");
       //document.title = "TextUtils - light-mode"
     }
   }
  return (
    <>
      <BrowserRouter>
        <div className="grid-container">
            <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <Routes>
                  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils- word counter, character counter, remove extra spaces" mode={mode} /> } />
                  <Route exact path="/about" ChangeTitle={ChangeTitle} element={<About  mode={mode} />} />
            </Routes> 
        </div>
     </BrowserRouter>
    </>
  );
}

export default App;
