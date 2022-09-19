import './App.css';
import React from "react";
import TodoApp from "./component/TodoApp/todoapp";
import Home from './component/Home/home';
import About from './component/About/about';
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App() {  
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
        <Routes>
        {/* <Route path="/" exact element={<Home/>}/> */}
        <Route path="/todo" element={<TodoApp/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
