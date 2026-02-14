import Button from 'react-bootstrap/Button';
export default  function Home() {

function test() {
    alert("You Clicked Me.... ")
}

  return (
    <>
      <h1>This is Home</h1>
      <Button variant="success" onClick={test}>Success</Button>
    </>
  )
}
