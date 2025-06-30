import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// Texutils App
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');//Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null); //State to manage alerts

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);//This will set the alert to null after 3 seconds, so that the alert disappears after 1.5 seconds
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(4 33 51)'; //Changing the background color of the body to charcoal grey
      showAlert("Dark mode has been enabled","success"); //Showing the alert when dark mode is enabled
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing"; //Changing the title of the document to TextUtils is Amazing after 1.5 seconds
      // }, 1500);
      // setInterval(()=>{
      //   document.title="Install TextUtils Now"; //Changing the title of the document to Install TextUtils Now after 1.5 seconds
      // }, 3000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'; //Changing the background color of the body to white
      showAlert("Light mode has been enabled","success"); //Showing the alert when light mode is enabled
    }
  }

  return (
  <>
<Router>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<strong><Alert alert={alert}/></strong>
<div className="container my-3"> {/*my-3 is used to give a margin of 3 pixels in the y axis so that the TextForm has some distance from the Navbar*/}
<Routes>
  {/*React uses partial matching to look for components,
  E.g.  /users--> Component 1
        /users/home-->Component 2
   Hence to make sure a particular link leads us to the correct component we use exact path= instaed of path=*/}
      <Route exact path="/about" element={<About mode={mode} />}/>
      <Route exact path="/" element={<TextForm showAlert={showAlert}heading="Enter the text to be analyzed:" mode={mode}/>}/>
</Routes>
</div>
</Router>
  </>
  );
}

export default App;


