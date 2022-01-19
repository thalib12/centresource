import {React,useEffect,useState} from 'react';
import { Card,Button } from 'react-bootstrap';

function Foods({date}) {

    const fooda="https://images.unsplash.com/photo-1624300629298-e9de39c13be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    const foodb= "https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    const foodc="https://images.unsplash.com/photo-1611171711791-b34fa42e9fc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
    const foodd="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80"

        const [bfast,setBfast]=useState(foodd)
        const [lunch,setLunch]=useState(foodc)
        const [evmeal,setEvmeal]=useState(foodb)
        const [dinner,setDinner]=useState(fooda)
        const [datas,setDatas]=useState([])

        const proceed=()=>{
            const menu={date,bfast,lunch,evmeal,dinner}
            setDatas([...datas,menu])
           
            console.log("menu",datas);
        }
        useEffect(()=>{
            sessionStorage.setItem("user",JSON.stringify(datas))
        },[datas])

return <div>
    <h3>{date}</h3>
<div style={{display:"flex"}}>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={bfast} />
  <Card.Body>
    <Card.Title>Breakfast</Card.Title>
   
    <div style={{marginLeft:"35%"}}>
    <label className="switch">
  <input type="checkbox" onChange={(e)=>e.target.checked ? setBfast(fooda):setBfast(foodd)}/>
  <span className="slider round"></span>
</label>

    </div>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={lunch} />
  <Card.Body>
    <Card.Title>Lunch</Card.Title>
   
    <div style={{marginLeft:"35%"}}>
    <label className="switch">
  <input type="checkbox" onChange={(e)=>e.target.checked ? setLunch(foodb):setLunch(foodc)}/>
  <span className="slider round"></span>
</label>

    </div>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={evmeal} />
  <Card.Body>
    <Card.Title>Evening meal</Card.Title>
  
    <div style={{marginLeft:"35%"}}>
    <label className="switch">
  <input type="checkbox" onChange={(e)=>e.target.checked ? setEvmeal(foodc):setEvmeal(foodb)}/>
  <span className="slider round"></span>
</label>

    </div>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={dinner} />
  <Card.Body>
    <Card.Title>Supper</Card.Title>
   
    <div style={{marginLeft:"35%"}}>
    <label className="switch">
  <input type="checkbox" onChange={(e)=>e.target.checked ? setDinner(foodd):setDinner(fooda)}/>
  <span className="slider round"></span>
</label>

    </div>
    

  </Card.Body>
</Card>




</div>
<button onClick={proceed} style={{width:"300px",backgroundColor:"green",color:"white",marginLeft:"30%",marginTop:"20px",borderRadius:"8px"}}>proceed</button>
  
</div>;
}


export default Foods;
