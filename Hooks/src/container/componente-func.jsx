import React, {useEffect, useState} from 'react';

const ComponenteFunc = () => {
 
  const nombre = 'Martin'
  const apellidos = 'San Jose'
  const fecha = new Date();
  const [edad, setEdad] = useState(0);
  
  useEffect(() => {
    const intervalID = setInterval (
      () => tick(), 1000
   );
    return () => {
      clearInterval(intervalID);
    };
  },);

  const tick=()=>{
    setEdad(edad + 1);
    return {
      nombre,
      apellidos,
      fecha,
      edad
    }
  }
  

  return (
    <div>
      <h2>
         Hora Actual:
         {fecha.toLocaleTimeString()}
         </h2>
         <h3>{nombre} {apellidos}</h3>
         <h1>Edad: {edad}</h1>
    </div>
  );
}


export default ComponenteFunc;

