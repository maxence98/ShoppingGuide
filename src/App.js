import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Scatter from './components/scatter';
import NavBar from './components/navBar';
import { Container } from '@mui/material';

function App() {
  const [products, setProducts] = useState([]); 

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
        <NavBar />
        <Container maxWidth="lg">
          <Scatter data={products} />
        </Container>
        
        <footer><a href="https://www.flaticon.com/free-icons/milk" title="milk icons">Milk icons created by lutfix - Flaticon</a></footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
