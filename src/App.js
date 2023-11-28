import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import FeriadoContainer from './FeriadoContainer/FeriadoContainer';
import Footer from './Footer/Footer';
import axios from 'axios';
import loadIcon from './images/loading2.gif';

function App() {
  const [feriadosData, setFeriadosData] = useState([]);
  let anio = new Date().getFullYear();
  
  useEffect(() => {
    axios.get('https://api.victorsanmartin.com/feriados/en.json')
      .then(response => {
        // Actualiza el estado con los datos obtenidos de la API
        const {data} = response.data
        setFeriadosData(data);
      })
      .catch(error => {
        console.error("Error al obtener datos de la API", error);
      });
  }, []);

  return (
    <>
      <Header year={anio} /> 
      <section className="container">
        {feriadosData.length > 0 ? <FeriadoContainer feriadosData={feriadosData} /> : <p className='load'> <span> <img src={loadIcon} alt="Icono de carga" /> </span> Cargando... </p>}
      </section>
      <Footer />
    </>
  );
}

export default App;
