import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default  function About() {
const[n1,setN1] = useState(0);
const[n2,setN2] = useState(0);
const[ans,setAns] = useState(0);

  let setn1=(e)=>{setN1(Number(e.target.value))}
  let setn2=(e)=>{setN2(Number(e.target.value))}
   let add=()=> {
  let result=n1+n2
  setAns(result)
}
  return (
    <>
      <h1>This is About Page</h1>
      <Form.Control type="number" onChange={setn1} placeholder="Enter number one:" style={{ width: "200px", height: "35px" }}/>
      <br />
      <Form.Control type="number" onChange={setn2} placeholder="Enter number two:" style={{ width: "200px", height: "35px" }}/>
      <br />
      <Button variant="danger" onClick={add}>Success</Button>
      <h1>{ans}</h1>
    </>
  )
}
