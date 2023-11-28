import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import FeriadoContainer from './FeriadoContainer/FeriadoContainer';
import Footer from './Footer/Footer';

function App() {
  const [feriadosData, setFeriadosData] = useState([]);
  let anio = new Date().getFullYear();
  
  useEffect(() => {
  let headers = new Headers();


/*   headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Credentials', 'true'); */

  headers ={
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  }

    fetch(`https://api.victorsanmartin.com/feriados/en.json`,{
      method : "GET",
      mode: 'no-cors',
      headers: headers
    })
      .then(data => {
        console.log(data);
        setFeriadosData(data.data);
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
