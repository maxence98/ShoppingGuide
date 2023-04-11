import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Scatter from './components/scatter';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Scatter data={products} />
    </div>
  );
}

export default App;
