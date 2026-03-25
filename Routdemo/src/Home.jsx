import { useState } from "react";
import Button from 'react-bootstrap/Button';
export default  function Home() {

const[nm,setNm] = useState("")
let getnm=(e)=>{
  setNm(e.target.value)
}
function test() {
    alert("You Clicked Me.... "+nm)
}

  return (
    <>
      <h1>This is Home</h1>

      Name <input type='text' onChange={getnm}></input>
      <Button variant="success" onClick={test}>Success</Button>
      <h1>{nm}</h1>
    </>
  )
}
