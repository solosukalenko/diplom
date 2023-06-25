import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import { Route, Routes } from "react-router-dom";
import { Contakts } from "./component/pages/contakts";
import Katalog from "./component/pages/katalog";
import { Delivery } from "./component/pages/delivery";


class App extends React.Component { 
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Katalog/>} />
          <Route path="/contakts" element={<Contakts/>} />
          <Route path="/delivery" element={<Delivery/>} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;