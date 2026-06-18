import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [seconds, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

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

  const hours = Math.floor(seconds/3600)
  const minutes = Math.floor((seconds % 3600)/60)
  const remainingseconds = seconds % 60

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
    <div className={`flex min-h-screen flex-col items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`mb-4 rounded-lg px-4 py-2 font-medium transition-colors ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className={`flex h-96 w-96 flex-col items-center justify-center rounded-lg border p-8 shadow-lg transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-gray-100 text-black'}`}>
        <h1 className="text-3xl font-bold">Timer: {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{remainingseconds.toString().padStart(2, '0')}</h1>
      
  <div className="flex flex-row gap-4 mt-4">
        <button type='button' className="border-black border-2 py-2 px-4 rounded-2xl bg-green-500 text-white hover:bg-green-600" onClick={startTimer}>Start</button> 

        <button type='button' className="border-black border-2 py-2 px-4 rounded-2xl bg-red-500 text-white hover:bg-red-600" onClick={stopTimer}>Stop</button>
        <button type='button' className="border-black border-2 py-2 px-4 rounded-2xl bg-blue-500 text-white hover:bg-blue-600" onClick={resetTimer}>Reset</button>
      </div>
      </div>
    </div>
  )
}

export default App
