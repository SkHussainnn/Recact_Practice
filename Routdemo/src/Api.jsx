import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect,useState } from "react";
export default function API() {
const [data, SetData]=useState([])
let api=()=>{
    axios.get("http://localhost:8080/detail")
        .then(res=>{
            console.log(res.data)
            SetData(res.data)
        })
}
//onload
  useEffect(() => {
  api()
}, [])
    return (
        <>
            <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Acc_no</th>
            <th scope="col">Name</th>
            <th scope="col">Rd_amt</th>
            <th scope="col">Rd_date</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item)=>{
          return(
            <tr>
              <td>{item.acc_no}</td>
              <td>{item.name}</td>
              <td>{item.rd_amt}</td>
              <td>{item.rd_date}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
        </>
    );
}