import { useState } from 'react'
import Display from "./Display"

const Calculadora = () => {

    const [valor1, setValor1] = useState('')
    const [valor2, setValor2] = useState('')
    const [primero, setPrimero] = useState(true)
    const [disp, setDisplay] = useState('0')

    const addDigit = (digito) => {
        if (primero) {
            let temp = valor1 + digito
            setValor1(temp)
        } else {
            let temp = valor2 + digito
            setValor2(temp)
        }
    }

    return (
        <div className="container">
            <div className="disp">{disp}</div>
            <div className="btnGrid">
                <button className="upper">C</button>
                <button className="upper">#</button>
                <button className="upper">%</button>
                <button className="operation">/</button>
                <button className="numeric" onClick={addDigit('7')}>7</button>
                <button className="numeric">8</button>
                <button className="numeric">9</button>
                <button className="operation">x</button>
                <button className="numeric">4</button>
                <button className="numeric">5</button>
                <button className="numeric">6</button>
                <button className="operation">+</button>
                <button className="numeric">1</button>
                <button className="numeric">2</button>
                <button className="numeric">3</button>
                <button className="operation">-</button>
                <button className="numeric zero">0</button>
                <button className="numeric">.</button>
                <button className="operation">=</button>
            </div>
        </div>
        
    )
}

export default Calculadora
