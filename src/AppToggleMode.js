import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is unable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>
  {
    setAlert({
      msg : message,
      typ : type,
    });
    setTimeout(() =>
    {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been unable", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been unable", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <> 
    <BrowserRouter>
      <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          {/* React do partial matching, we have to write exact for complete matching
          /users --> componrnt 1
          /users/home --> component 2 */}

          {/* <Route path="/" element={<Home />} /> */}
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </div>    
    </BrowserRouter>     
    </>
  );
}

export default App;
