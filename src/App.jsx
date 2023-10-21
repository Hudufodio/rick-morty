import { BrowserRouter } from "react-router-dom";

import { Navbar, Header, Body, Card } from "./components";
import './global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Header />
        <Body />
        <Card />
      </div>
    </BrowserRouter>
  );
};

export default App;
