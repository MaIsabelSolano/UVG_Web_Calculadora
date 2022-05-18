import { useState } from 'react'
import { useEffect } from 'react'
import Display from "./Display"

const Calculadora = () => {

    const [valor1, setValor1] = useState('')
    const [valor2, setValor2] = useState('')
    const [primero, setPrimero] = useState(true)
    const [disp, setDisplay] = useState('0')
    const [operacion, setOperacion] =useState('')

    useEffect(() => {
        if (primero) {
            setDisplay(valor1)
            console.log('valor1 ',valor1)
        }
        else {
            setDisplay(valor2)
            console.log('valor2 ',valor2)
        }
    })

    const addDigit = (digito) => {
        if (primero) {
            if (valor1.length <= 9){
                let temp = valor1 + digito
                setValor1(temp)
            }
            
        } else {
            if (valor2.length <= 9){
                let temp = valor2 + digito
                setValor2(temp)
            }
        }
    }

    const detOperacion = (op) => {
        if (primero){
            setPrimero(false)
            setOperacion(op)
        }
        else {
            const val1 = parseFloat(valor1)
            const val2 = parseFloat(valor2)
            let result = 0.0

            if (operacion === '+'){
                // suma
                result = val1 + val2

            } else if (operacion === '-') {
                // resta
                result = val1 - val2

            } else if (operacion === 'x') {
                // multiplicacion
                result = val1 * val2

            } else if (operacion === '/') {
                // división
                result = val1 / val2
            }
            setOperacion(op)
            console.log('resultado ',result)
            setValor1(result.toString())
            setValor2('')
        }
        
    }

    const mostrarResultado = () => {
        if (primero) {
            setDisplay(valor1)
        } else {
            const val1 = parseFloat(valor1)
            const val2 = parseFloat(valor2)
            let result = 0.0

            if (operacion === '+'){
                // suma
                result = val1 + val2

            } else if (operacion === '-') {
                // resta
                result = val1 - val2

            } else if (operacion === 'x') {
                // multiplicacion
                result = val1 * val2

            } else if (operacion === '/') {
                // división
                result = val1 / val2
            }
            console.log('= ', result)
            setValor1(result.toString())
            setValor2('')
            setDisplay(valor1)
            setPrimero(true)
        }
    }

    const clear = () => {
        setValor1('')
        setValor2('')
        setDisplay('0')
        setOperacion('')
        setPrimero(true)
    }

    return (
        <div className="container">
            <div className="disp">
                {disp}
            </div>
            <div className="btnGrid">
                <button className="upper" onClick={() => clear()}>C</button>
                <button className="upper">⁺∕₋</button>
                <button className="upper">%</button>
                <button className="operation" onClick={() => detOperacion('/')}>/</button>
                <button className="numeric" onClick={() => addDigit('7')}>7</button>
                <button className="numeric" onClick={() => addDigit('8')}>8</button>
                <button className="numeric" onClick={() => addDigit('9')}>9</button>
                <button className="operation" onClick={() => detOperacion('x')}>x</button>
                <button className="numeric" onClick={() => addDigit('4')}>4</button>
                <button className="numeric" onClick={() => addDigit('5')}>5</button>
                <button className="numeric" onClick={() => addDigit('6')}>6</button>
                <button className="operation" onClick={() => detOperacion('+')}>+</button>
                <button className="numeric" onClick={() => addDigit('1')}>1</button>
                <button className="numeric" onClick={() => addDigit('2')}>2</button>
                <button className="numeric" onClick={() => addDigit('3')}>3</button>
                <button className="operation" onClick={() => detOperacion('-')}>-</button>
                <button className="numeric zero" onClick={() => addDigit('0')}>0</button>
                <button className="numeric" onClick={() => addDigit('.')}>.</button>
                <button className="operation" onClick={() => mostrarResultado()}>=</button>
            </div>
        </div>
        
    )
}

export default Calculadora
