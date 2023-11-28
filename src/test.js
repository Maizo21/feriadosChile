fetch(`https://apis.digital.gob.cl/fl/feriados/2023`)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));