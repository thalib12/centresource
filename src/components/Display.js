import {React,useEffect,useState} from 'react';
import { Card } from 'react-bootstrap';

function Display() {
    const [datas,setDatas]=useState([])

    const getData=()=>{
        const data=JSON.parse(sessionStorage.getItem("user"))
        setDatas(data)
        console.log("food datas");
        sessionStorage.clear()
    }

    useEffect(() => {
     getData()
    }, []);

    
  return <div>
      {(datas.length==0)?<h3>select food items for each day first..</h3>:null}
      {
          datas.map(item=><div>
            <h2 style={{textAlign:"center"}}>{item.date}</h2>
  <div className='disp'>
  <Card style={{ width: '10rem' }}>
    <Card.Img style={{width:"10rem"}} variant="top" src={item.bfast} />
    <Card.Body>
      <Card.Title>Breakfast</Card.Title>
      </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
    <Card.Img style={{width:"10rem"}} variant="top" src={item.lunch} />
    <Card.Body>
      <Card.Title>Lunch</Card.Title>
      </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
    <Card.Img style={{width:"10rem"}} variant="top" src={item.evmeal} />
    <Card.Body>
      <Card.Title>Evening meal</Card.Title>
      </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
    <Card.Img style={{width:"10rem"}} variant="top" src={item.dinner} />
    <Card.Body>
      <Card.Title>Supper</Card.Title>
      </Card.Body>
  </Card>
  </div>
  </div>)

      }
  </div>;
}

export default Display;
