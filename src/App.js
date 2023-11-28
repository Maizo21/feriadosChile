import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import FeriadoContainer from './FeriadoContainer/FeriadoContainer';
import Footer from './Footer/Footer';

function App() {
  const [feriadosData, setFeriadosData] = useState([]);
  let anio = new Date().getFullYear();
  
  useEffect(() => {
  let anio = new Date().getFullYear();
    fetch(`https://apis.digital.gob.cl/fl/feriados/${anio}`)
      .then(response => {
        console.log(response);
        response.json()
      })
      .then(data => {
        console.log(data);
        setFeriadosData(data);
      })
      .catch(error => console.log(error));
  }
  , []);
  return (
    <>
      <Header year={anio} /> 
      <section className="container">
        {feriadosData.length > 0 ? <FeriadoContainer feriadosData={feriadosData} /> : <p>Cargando...</p>}
      </section>
      <Footer />
    </>
  );
}

export default App;
