import React from 'react';
import { CookiesProvider } from 'react-cookie';
import Home from "./pages"

const App = () => {
  return (
    <CookiesProvider>
      <Home />
    </CookiesProvider>
  );
}

export default App;
