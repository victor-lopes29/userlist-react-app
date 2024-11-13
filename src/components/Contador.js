import '../App.css';

//let valor = 1;
import { useState } from 'react';

function Contador() {

  const [valor, setValor] = useState(1);
  
  const aumentar = () => {
    setValor(valor + 1);
    console.log(valor);
  }

  const diminuir = () => {
    setValor(valor - 1);
}
  return (
    /*<div className="App">*/
    <div>
      <h1>Contador</h1>
      <button onClick={diminuir}>-</button>
      <button onClick={aumentar}>+</button>
      <input type="number" value={valor} />
    </div>
  );
}

export default Contador;
