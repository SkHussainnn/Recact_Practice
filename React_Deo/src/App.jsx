
import './App.css'
import logo from './assets/Limage.png';
import Test from './Test.jsx'
export default function App() {
  return (
    <>
    <div className="d">
      <h1 id="h">This is my first react app</h1>
      <Test/>
      <img src={logo} height={100} width={250}></img>
      </div>
    </>
  )
}
