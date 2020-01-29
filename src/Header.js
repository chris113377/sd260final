import React from "react";

const Header = props => (
  <header className="app-header">
    <React.Fragment>
      <h1 className="header-title">Crypto Converter</h1>
      <button className="header-btn" onClick={props.changeView}>
        Change View
      </button>
    </React.Fragment>
  </header>
);

export default Header;
