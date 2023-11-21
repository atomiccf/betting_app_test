import './App.css'

import {BrowserRouter} from 'react-router-dom';
import PagesRouter from "./routes/PagesRouter";
import Header from "./Components/Header/Header"
import React from "react";


function App() {
    return (
    <>
    <Header/>
     <BrowserRouter>
        <PagesRouter/>
     </BrowserRouter>
    </>
    )
}

export default App;
