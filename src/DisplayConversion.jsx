import React, { useState } from "react";

const DisplayConversion = props => {
  const [inp, setInp] = useState(0);
  const [cryptoChoice, setCryptoChoice] = useState("");
  const [fiatChoice, setFiatChoice] = useState("");

  return (
    <div className="app-body">
      <form className="app-form">
        <input
          className="app-input"
          type="number"
          name=""
          id=""
          placeholder="Amount"
          onChange={e => setInp(e.target.value)}
        ></input>
        <select
          className="crypto"
          onChange={e => setCryptoChoice(e.target.value)}
        >
          <option>Select Crypto</option>
          <option value="BTC">Bitcoin</option>
          <option value="ETH">Ethereum</option>
          <option value="LTC">Litecoin</option>
        </select>

        <select className="fiat" onChange={e => setFiatChoice(e.target.value)}>
          <option>Select currency</option>
          <option value="USD">US Dollars</option>
          <option value="CAD">Canadian Dollars</option>
          <option value="EUR">EU Euros</option>
        </select>
      </form>
      <button
        className="app-btn"
        onClick={() => props.sendChoice(cryptoChoice, fiatChoice, inp)}
      >
        Submit
      </button>
      <h1 className="app-result">
        {props.money} {props.result}
      </h1>
    </div>
  );
};

export default DisplayConversion;
