import { useState, useEffect } from 'react'

const Calculadora = () => {

    const [valor1, setValor1] = useState('')
    const [valor2, setValor2] = useState('')
    const [primero, setPrimero] = useState(true)
    const [disp, setDisplay] = useState('0')
    const [operacion, setOperacion] = useState('')

    useEffect(() => {
        if (primero) {
            checkDisplay(valor1)
        } else {
            checkDisplay(valor2)
        }
    })

    const addDigit = (digito) => {
        if (primero) {
            if (valor1.length < 9) {
                let temp = valor1 + digito
                setValor1(temp)
            }
        } else {
            if (valor2.length < 9) {
                let temp = valor2 + digito
                setValor2(temp)
            }
        }
    }

    const detOperacion = (op) => {
        if (primero){
            setPrimero(false)
            setOperacion(op)
        } else {
            const val1 = parseFloat(valor1)
            const val2 = parseFloat(valor2)
            let result = 0.0
            if (operacion === '+') {
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
            setValor1(result.toString())
            setValor2('')
        }
    }

    const modificar = (mod) => {
        if (mod === '#') {
            if (primero) {
                const temp = -1 * parseFloat(valor1)
                setValor1(temp.toString())
            } else {
                const temp = -1 * parseFloat(valor2)
                setValor2(temp.toString())
            }
        } else if (mod === '%') {
            if (primero) {
                const temp = parseFloat(valor1) / 100
                setValor1(temp.toString())
            } else {
                const temp = parseFloat(valor2) / 100
                setValor2(temp.toString())
            }
        }
    }

    const checkDisplay = (disp) => {
        if (disp.length < 9) {
            setDisplay(disp)
        } else {
            // arreglar el display
            const temp = parseFloat(disp)
            const temp2 = temp.toExponential(4)
            setDisplay(temp2)
        }
    }

    const mostrarResultado = () => {
        if (primero) {
            checkDisplay(valor1)
        } else {
            const val1 = parseFloat(valor1)
            const val2 = parseFloat(valor2)
            let result = 0.0

            if (operacion === '+') {
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
                <button type="submit" className="upper" onClick={() => clear()}>C</button>
                <button type="submit" className="upper" onClick={() => modificar('#')}>⁺∕₋</button>
                <button type="submit" className="upper" onClick={() => modificar('%')}>%</button>
                <button type="submit" className="operation" onClick={() => detOperacion('/')}>/</button>
                <button type="submit" className="numeric" onClick={() => addDigit('7')}>7</button>
                <button type="submit" className="numeric" onClick={() => addDigit('8')}>8</button>
                <button type="submit" className="numeric" onClick={() => addDigit('9')}>9</button>
                <button type="submit" className="operation" onClick={() => detOperacion('x')}>x</button>
                <button type="submit" className="numeric" onClick={() => addDigit('4')}>4</button>
                <button type="submit" className="numeric" onClick={() => addDigit('5')}>5</button>
                <button type="submit" className="numeric" onClick={() => addDigit('6')}>6</button>
                <button type="submit" className="operation" onClick={() => detOperacion('+')}>+</button>
                <button type="submit" className="numeric" onClick={() => addDigit('1')}>1</button>
                <button type="submit" className="numeric" onClick={() => addDigit('2')}>2</button>
                <button type="submit" className="numeric" onClick={() => addDigit('3')}>3</button>
                <button type="submit" className="operation" onClick={() => detOperacion('-')}>-</button>
                <button type="submit" className="numeric zero" onClick={() => addDigit('0')}>0</button>
                <button type="submit" className="numeric" onClick={() => addDigit('.')}>.</button>
                <button type="submit" className="operation" onClick={() => mostrarResultado()}>=</button>
            </div>
        </div>
    )
}

export default Calculadora
