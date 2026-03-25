import { Container, Row, Col } from "react-bootstrap";
import { FaDollarSign, FaCalendarAlt, FaFileAlt, FaThumbsUp } from "react-icons/fa";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from "react";

const Card = ({ title, value, footer, bg, text, icon,}) => {
  return(
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card border-0 shadow-lg h-100 rounded-4">

        <div className="card-body d-flex justify-content-between align-items-center">
          
          <div>
            <h3 className={`fw-bold ${text}`}>{value ?? 0}</h3> {/* ✅ error fixed */}
            <p className="text-muted mb-0">{title}</p>
          </div>

          <div className={`fs-2 ${text}`}>
            {icon}
          </div>

        </div>

        <div className={`card-footer ${bg} text-white d-flex justify-content-between align-items-center rounded-bottom-4`}>
          <span>{footer}</span>
          <span>↗</span>
        </div>

      </div>
    </div>
  );
};

export default function Service() {
  const [data, SetData]=useState([])
  const [ttl, SetTtl] = useState(0);
  const [ind, SetInd] = useState(0);
  const [fr, SetFr] = useState(0);
  const [det, SetDet] = useState(0);

  let api=()=>{
    axios.get("https://api.rootnet.in/covid19-in/stats/latest")
        .then(res=>{
            console.log(res.data)
            SetData(res.data.data.regional)
            console.log(data)
            SetTtl(res.data.data.summary.total)
            SetInd(res.data.data.summary.confirmedCasesIndian)
            SetFr(res.data.data.summary.confirmedCasesForeign)
            SetDet(res.data.data.summary.deaths)
        })
  }
  //onload
  useEffect(() => {
  api()
}, [])

  return (
    <>
      
        
      <div className="container mt-5">
        <div className="row">

          <Card
            title="Total Cases"
            value={ttl}   
            footer="10% changes on profit"
            bg="bg-warning"
            text="text-warning"
            icon={<FaDollarSign />}
          />

          <Card
            title="Confirmed Cases Indian"
            value={ind}
            footer="28% task performance"
            bg="bg-danger"
            text="text-danger"
            icon={<FaCalendarAlt />}
          />

          <Card
            title="Confirmed Cases Foreign"
            value={fr}
            footer="10k daily views"
            bg="bg-success"
            text="text-success"
            icon={<FaFileAlt />}
          />

          <Card
            title="Deaths"
            value={det}
            footer="1k download in App store"
            bg="bg-primary"
            text="text-primary"
            icon={<FaThumbsUp />}
          />

        </div>
      </div>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Loc</th>
            <th scope="col">Indian</th>
            <th scope="col">Foreign</th>
            <th scope="col">Discharged</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item)=>{
          return(
            <tr>
              <td>{item.loc}</td>
              <td>{item.confirmedCasesIndian}</td>
              <td>{item.confirmedCasesForeign}</td>
              <td>{item.discharged}</td>
              <td>{item.deaths}</td>
            </tr>
          )
        })}
        </tbody>
      </table>

    </>
  );
}