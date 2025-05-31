import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './qr.css'
import Qr from './Component/Qr'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <Qr/>
    </>
  )
}

export default App
