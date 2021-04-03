import React from 'react';
import './Styles/App.css';
//src
import requests from "./requests";
//components
import Row from './Components/Row';
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  const data = (requests);
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Banner />
        {/* rows */}
        {data.map((request) => {
          const { id, title, url } = request;
          return (<Row key={id} title={title} url={url} />);
        })
        }
      </header>
    </div>
  );
}

export default App;
