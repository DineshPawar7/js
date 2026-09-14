import { useState } from "react"



export default function App() {

    let [count, setCount] = useState(0)

    function increse() {
        count ++

        setCount(count)
    }



    return (
        <div>

            <div className=" items-center text-center justify-center bg-gray-200 rounded-lg">

                <h1 className="font-bold">Counter: {count}</h1>

                <button className="bg-black text-white" onClick={increse}>Click</button>

            </div>
        </div>
    )
}