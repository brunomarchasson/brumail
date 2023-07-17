import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface GreedingResult {
  greeting: string;
}

const getGreeting = async function ():Promise<GreedingResult>{
  const res = await fetch("/api/test");
  return await res.json().then(r => r as GreedingResult) ;
};

function App() {
  const [count, setCount] = useState(0)
  const [greeting, setGreeting] = useState<string>("");
  
  useEffect(() => { // Add this hook
    getGreeting().then((res) => setGreeting(res.greeting)).catch(console.error);
  }, []);
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>Server response: {greeting}</p> 
    </>
  )
}

export default App
