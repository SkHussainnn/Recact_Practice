import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function API() {

const [data, SetData] = useState([]);
const [id, SetId] = useState("");
const [unm, SetUName] = useState("");
const [ucity, SetUCity] = useState("");
const [umob, SetUMob] = useState("");
const [nm, SetName] = useState("");
const [city, SetCity] = useState("");
const [mob, SetMob] = useState("");
//save
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
let hndlnm = (e) => SetName(e.target.value);
let hndlcity = (e) => SetCity(e.target.value);
let hndlmob = (e) => SetMob(e.target.value);

//update
const [ushow, SetUShow] = useState(false);
const uhandleClose = () => SetUShow(false);
const uhandleShow = () => SetUShow(true);
let uhndlnm = (e) => SetUName(e.target.value);
let uhndlcity = (e) => SetUCity(e.target.value);
let uhndlmob = (e) => SetUMob(e.target.value);



let getdata=(id,name,city,mob)=>{
  SetId(id)
  SetUName(name)
  SetUCity(city)
  SetUMob(mob)
  uhandleShow()
}

// API call
let api = () => {
  axios.get("http://localhost:8080/stud")
    .then(res => {
      SetData(res.data)
    })
}


// onload
useEffect(() => {
  api()
}, [])

// add student
let addstud = () => {
  //alert(nm + " " + city + " " + mob)
  handleClose()
  const dt={
    name: nm,
    city: city,
    mob: mob
  }
  axios.post("http://localhost:8080/save", dt)
    .then(() => {
      //console.log(res.data);
      alert("Student added successfully")
      api()
      setShow(false)
    })
}


let updtstud = () => {
  //alert(nm + " " + city + " " + mob)
  uhandleClose()
  const dt={
    id:id,
    name: unm,
    city: ucity,
    mob: umob
  }
  axios.put("http://localhost:8080/updt", dt)
    .then(() => {
      //console.log(res.data);
      alert("Update successfully")
      api()
      SetUShow(false)
    })
    .catch(err => console.log("Update Error: ", err));
}

let del=(id)=>{
  alert(id)
  axios.delete("http://localhost:8080/del/"+id)
  .then(()=>{
   alert("Deleted success.....")
   api()
   setShow(false)
  })
}

return (
  <>
    <Button variant="primary" onClick={handleShow}>
      Add Student
    </Button>
    {/*save*/}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Student</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control type="text" onChange={hndlnm} placeholder="Enter name" />
        <br />
        <Form.Control type="text" onChange={hndlcity} placeholder="Enter city" />
        <br />
        <Form.Control type="number" onChange={hndlmob} placeholder="Enter mobile" />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={addstud}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    {/*Update*/}
    <Modal show={ushow} onHide={uhandleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Student</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Control type="text" value={unm} onChange={uhndlnm} placeholder="Enter name" />
        <br />
        <Form.Control type="text" value={ucity} onChange={uhndlcity} placeholder="Enter city" />
        <br />
        <Form.Control type="number" value={umob} onChange={uhndlmob} placeholder="Enter mobile" />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={uhandleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={updtstud} >
          Update Changes
        </Button>
      </Modal.Footer>
    </Modal>

    <table className="table table-dark">
      <thead>
        <tr>
          <th class="table-primary">Id</th>
          <th class="table-secondary">Name</th>
          <th class="table-success">City</th>
          <th class="table-info">Mobile</th>
          <th class="table-warning">Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.mob}</td>
            <td><Button variant="danger" onClick={() => del(item.id)}>Delete</Button>
            <Button variant="warning" onClick={() => getdata(item.id, item.name,item.city,item.mob)}>Update</Button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
}