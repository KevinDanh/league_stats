import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import {fetchChampions} from './middleware/server';
import Champions from './components/Champions'

function App() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const getChampions = async () => {
      const championsFromServer = await fetchChampions();
      setChampions(championsFromServer);
    }
    getChampions()
  }, []);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route
          path='/'
          element={
            <div className='container'>
              <Champions champions={champions}></Champions>
            </div>
          }
        />

        <Route path='/about' element={<About />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
