import { useState, type JSX } from "react";

function CalculadoraPropinas(): JSX.Element {
  const [importe, setImporte] = useState<string>("");
  const [propina, setPropina] = useState<number>(10);

  const valorImporte = Number(importe) || 0;
  const importePropina = valorImporte * (propina / 100);
  const total = valorImporte + importePropina;

  return (

      <><div className="calculadora-propinas">
          <h1>Calculadora de propinas</h1>
          <div>
              <label>Importe de la cuenta</label>
              <input
                  type="number"
                  value={importe}
                  onChange={(e) => setImporte(e.target.value)}
                  placeholder="0.0"
              ></input>
          </div>
      </div><div>
              <label>Porcentaje de propina:</label>
              <div className="botones-propina">
                  <button onClick={() => setPropina(10)} style={{ backgroundColor: propina === 10 ? '#007bff' : '#ccc' }}>10%</button>
                  <button onClick={() => setPropina(15)} style={{background : propina === 15 ? '#007bff' : '#ccc' }}>15%</button>
                  <button onClick={() => setPropina(20)} style={{ background : propina === 20 ? '#007bff' : '#ccc'}}>20%</button>
              </div>
          </div>
          <div>
            <h2>Desglose</h2>
            <h3>Cuenta: {valorImporte.toFixed(2)} €</h3>
            <h3>Propina ({propina}%): {importePropina.toFixed(2)}</h3>
            <h3>Total a pagar: {total.toFixed(2)} €</h3>



          </div>
          
          
          </>
  );
}

export default CalculadoraPropinas;
