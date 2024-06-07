import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import Header from "./components/Header";
import Barra from "./components/Navbar";

function App(){
  return(
  <BrowserRouter>
  <Header />
  <Barra />
  <AppRoutes />
  </BrowserRouter>
  );
}

export default App;