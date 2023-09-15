import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const[data,setData]=useState([])

  useEffect(()=>{
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  console.log(data)
  return (
    <>
      <h1 className="text-5xl">Vite + React</h1>

    </>
  );
}

export default App;
