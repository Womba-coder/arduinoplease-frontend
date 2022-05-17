import { React } from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data,setData] = useState([]);
  const [info,setInfo] = useState({});

useEffect(()=>{
  fetch("https://wombz.pythonanywhere.com/")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setData(result)
        setInfo(result[result.length -1])
      },
      (error) => {
      }
    )
   setInterval(() => {
     window.location.reload()
    }, 
    60000);
},[])



return (
  <>
    <div className="t1">
    <h1>The Department Of Computer Science</h1>
      <p className="CurrentWeather">{info.data}</p>
    </div>
    <div className="container" className="t2">
    {data.map(item=>(
  <li key={item.id}>
    {item.data}  {item.timeStp}
  </li>
    ))}
  
    </div>
  </>
  );
}

export default App;
