import { useState } from "react"
import style from '../Components/Calculator.module.scss'

export function Calculator() {
    const [result, setResult] = useState(0)
    const [valueOne, setValueOne] = useState("")
    const [valueTwo, setValueTwo] = useState(0)


    const btnValues = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ]

    btnValues.flat().map((btn, i) => {

        return (
            <button key={i}
                value={btn}
                onClick={() => {
                    console.log(`${btn} clicked!`);
                }}
            />
        )
    })


    const add = () => {
        const res = Number(valueOne) + Number(valueTwo)
        setResult(res)

    }
    // console.log(valueOne);

    const subtract = () => {
        const res = Number(valueOne) - Number(valueTwo)
        setResult(res)
    }

    const multiply = () => {
        const res = Number(valueOne) * Number(valueTwo)
        setResult(res)
    }

    const divide = () => {
        const res = Number(valueOne) / Number(valueTwo)
        setResult(res)
    }



    return (
        <section className={style.calculator}>
            <input onChange={(event) => setValueOne(event.target.value)} value={valueOne} type="number" placeholder="Value 1" />
            <input onChange={(event) => setValueTwo(event.target.value)} value={valueTwo} type="number" placeholder="Value 2" />
            <button onClick={subtract}>-</button>
            <button onClick={add}>+</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
            <div>
                {btnValues.map(nmb => {
                    return(
                        <button onClick={()=>setValueOne(valueOne+nmb)}>{nmb}</button> 
                    )
                })}
            </div>


            <h3>Result: {result}</h3>

        </section>
    )
}
