import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning === false) {
      return
    }

    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [isRunning])

  function startTimer() {
    setIsRunning(true)
  }

  function stopTimer() {
    setIsRunning(false)
  }

  function resetTimer() {
    setCount(0)
    setIsRunning(false)
  }

  return (
    <div className="timer-container">
      <h1>Timer: {count}</h1>

      <div className="timer-buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default App
