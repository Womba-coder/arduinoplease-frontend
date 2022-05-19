import { React } from "react";
import { useState } from "react";
import { useEffect } from "react";
import GaugeChart from 'react-gauge-chart'
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function Dashboard() {

  const [data,setData] = useState([]);
  const [info,setInfo] = useState({});

useEffect(()=>{
    fetch("http://127.0.0.1:8000/")
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
  fetch("http://127.0.0.1:8000/")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setData(result)
        setInfo(result[result.length -1])
     //   const currentDate = result[result.length -1].timeStp
      //  const newDate = currentDate.toISOString().spit('T')[0]
       // console.log(newDate)

      },
      (error) => {
      }
    )
    }, 30000);
},[])

const chartInfo = {
  labels: data.map((data)=>data.timeStp),
  datasets: [

    {
      label: 'temperature',
      data: data.map((data)=>data.temperature),
      fill: false,
      
      borderColor: 'orange',
    },
    {
      label: 'humidity',
      data: data.map((data)=>data.humidity),
      fill: false,
      borderColor: 'green',
    }
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  elements:{
    line:{
      tension:0.5
    }
  }
};





return (
  <>
  <h1 className="name">Computer Science Department</h1>
  <div className="Container1">
  <div className="gauge">
  <div>
    <h1 className="name1">Temperature</h1>
  <GaugeChart id="gauge-chart2" percent={info.temperature/100}
  formatTextValue={value=>value + '°C'}
  />
  </div>
  <div>
  <h1 className="name2">Humidity</h1>
  <GaugeChart id="gauge-chart2"  percent={info.humidity/100}
  />
  </div>
  </div>
  <div className="chart">
    <Line data={chartInfo} options={options}/>
  </div>
  </div>
    
    <div className="area2">
    {data.map(item=>(
  <li key={item.id}>
    {item.temperature} {item.humidity}
  </li>
    ))}
  
    </div>

  </>
  );
}
