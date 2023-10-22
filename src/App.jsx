import { BrowserRouter } from "react-router-dom";

import { Navbar, Header, Body } from "./components";
import './global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
};

export default App;
