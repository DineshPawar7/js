import { useState } from "react"



export default function App() {
    const [content, setContent] = useState("dinesh not clickd")


function handleClick() {
    setContent("dinesh is clicked")

}

    return (
        <>

        <h1>{content}</h1>

        <button onClick={handleClick}>click</button>
        </>
    )
}