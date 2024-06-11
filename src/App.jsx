import { useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6"
import { FaMinusCircle } from "react-icons/fa";
import './App.css'

function App() {
  const [quant, setQuant]=useState(0)

  const handleAdd = ()=>{
    setQuant(quant+1)
  }

  const handleRemove = ()=>{
    if(quant!=0){
      setQuant(quant-1)
    }
  }
  
  return (
    <>
      <div className="flex gap-4">
        <button onClick={handleRemove} className='p-2 bg-white rounded-lg hover:bg-red-600 transition-all'><FaMinusCircle /></button>
        <h1 className='text-2xl font-bold'>{quant}</h1>
        <button onClick={handleAdd} className='p-2 bg-white rounded-lg hover:bg-green-600 transition-all'><FaCirclePlus /></button>
      </div>     
    </>
  )
}

export default App
