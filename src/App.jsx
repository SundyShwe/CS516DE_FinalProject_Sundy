import React, { createContext, useState } from "react";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

import { aboutme } from "./data/aboutme";
export const AppContext = createContext();

function App() {
  const [about] = useState(aboutme);
  return (
    <>
      <AppContext.Provider value={{ about }}>
        <Header />
        <Main />
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
