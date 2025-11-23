import { useState, type JSX } from "react";

function CalculadoraPropinas() : JSX.Element {
    const [importe, setImporte] = useState<string>('');
    const [propina, setPropina] = useState<number>(10)
    
    const importeValor = Number(importe) || 0;
    const importePropina = importeValor * (propina / 100);
    const total = importeValor + importePropina;


    return (
        <div>
            <h1>Calculadora de propinas</h1>
            <h2>Importe de la cuenta</h2>
            <input type="number" 
                   value={importe}
                   onChange={e => setImporte(e.target.value)}
                   placeholder="0.0"/>

            <h2>Porcentaje de la propina</h2>
            <div className="btn-porcentaje">
                <button onClick={() => setPropina(10)} style={{backgroundColor : propina === 10 ? 'blue' : 'grey'}}>10</button>
                <button onClick={() => setPropina(15)} style={{backgroundColor: propina === 15 ? 'blue' : 'grey'}}>15</button>
                <button onClick={() => setPropina(20)} style={{backgroundColor: propina === 20  ? 'blue' : 'grey'}}>20</button>
            </div>

            <div>
                <h2>Desglose</h2>
                <h3>Propina ({propina}%): €{importePropina.toFixed(2)}</h3>
                <h3>Total a pagar: €{total.toFixed(2)}</h3>
            </div>

        </div>
    )
}

export default CalculadoraPropinas;