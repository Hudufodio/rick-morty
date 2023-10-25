import { BrowserRouter } from "react-router-dom";

import { Navbar, Header, Body, About } from "./components";
import './global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Header />
        <Body />
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
