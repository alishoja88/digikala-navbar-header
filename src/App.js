import React, { Component } from "react";
import DigiProducts from "./listProducts/DigiProducts"
import HeaderTop from "./components/header-top/HeaderTop";
import MainNavbar from "./components/navbar/MainNavbar";
import Respons from "./components/responsive-mobile/Respons"
import "./components/header-top/headerTop.css"
import "./App.css"

class App extends Component {
  state = {
    products : DigiProducts ,

  };

 
  render() {
    return (
      <React.Fragment>
        <header className="main-header">
          <HeaderTop />
          <MainNavbar 
          products={this.state.products}
          onclick={this.handelevent}/>
        </header>
          <Respons />
      </React.Fragment>
    );
  }
}

export default App;
