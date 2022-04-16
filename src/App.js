import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setData(data.slip)
      })
  }, [])

  console.log(data)
  return (
    <div className="App">
      <section className="App-Wrapper">
        <h1 className="Advice-ID"> ADVICE #{data.id} </h1>
        <p className="Advice">" {data.advice} " </p>
        <picture>
          <source
            media="(max-width:800px)"
            srcSet={
              process.env.PUBLIC_URL + "/images/pattern-divider-mobile.svg"
            }
          ></source>
          <img
            alt="divider"
            src={process.env.PUBLIC_URL + "/images/pattern-divider-desktop.svg"}
          />
        </picture>
        <button onClick={() => window.location.reload(false)}>
          <img src={process.env.PUBLIC_URL + "/images/icon-dice.svg"} />
        </button>
      </section>
    </div>
  )
}

export default App
