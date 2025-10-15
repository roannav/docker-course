import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface ApiResponse {
  message: string;
  status?: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [apiMessage, setApiMessage] = useState<string>('')
  const [apiHealth, setApiHealth] = useState<string>('')

  useEffect(() => {
    // Fetch welcome message from backend
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then((data: ApiResponse) => setApiMessage(data.message))
      .catch(err => console.error('Error fetching welcome message:', err))

    // Fetch health status from backend
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then((data: ApiResponse) => setApiHealth(data.status || 'Unknown'))
      .catch(err => console.error('Error fetching health status:', err))
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>MERN Stack with Docker</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <div className="api-info">
        <h2>Backend API Status</h2>
        <p><strong>Welcome Message:</strong> {apiMessage || 'Loading...'}</p>
        <p><strong>Health Status:</strong> {apiHealth || 'Loading...'}</p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
