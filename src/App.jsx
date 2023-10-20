import { BrowserRouter } from "react-router-dom";

import { Navbar, Header, Body, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
