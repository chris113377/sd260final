import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import DisplayConversion from "./DisplayConversion.jsx";
import DisplayChart from "./DisplayChart.jsx";

function App() {
  const [history, setHistory] = useState();
  const [money, setMoney] = useState("");
  const [displayDefault, setDisplayDefault] = useState(true);
  const [result, setResult] = useState(0);

  async function getData(crypto, money, amount) {
    const response = await axios.get(
      `https://apiv2.bitcoinaverage.com/convert/global?from=${crypto}&to=${money}&amount=${amount}`
    );

    setResult(response.data.price);
  }

  async function getHistory() {
    const response = await axios.get(
      `https://api.coindesk.com/v1/bpi/historical/close.json`
    );
    setHistory(response.data.bpi);
  }

  const sendChoice = (crypt, fiat, num) => {
    getData(crypt, fiat, num);
    setMoney(fiat);
  };

  const changeView = () => {
    getHistory();
    setDisplayDefault(!displayDefault);
  };

  return (
    <div className="app">
      <Header changeView={changeView} />
      {displayDefault && (
        <DisplayConversion
          money={money}
          result={result}
          sendChoice={sendChoice}
        />
      )}
      {!displayDefault && <DisplayChart history={history} />}
    </div>
  );
}

export default App;
