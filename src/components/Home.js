import {useState,React,useEffect} from 'react'
import { InputGroup,Form,FormControl,Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Foods from './Foods'

function Home() {
    const [date,setDate]=useState("")
    const [dateList,setDatelist]=useState([])
    const [dateval,setDateval]=useState("")
    function nextweek(){
      let dateArr= date.split("-")
       console.log(dateArr);

       let year=dateArr[0]
       let month=dateArr[1]-1
       let da=Number(dateArr[2])
        
        console.log(da);
       const datt=[]
        
       console.log(nextweek);
       for(let i=0;i<6;i++){
        var nextweek = new Date(year,month,da+i).toLocaleDateString()
        console.log("Datessss:",nextweek);
        if(nextweek!="Invalid Date"){
       datt.push(nextweek)
        }

       }
       console.log(datt);
       setDatelist(datt)
       
    }
    console.log("Daaaaaaa",dateList);
    useEffect(() => {
        nextweek()
       
    }, [date])
    return (
    <>
    {/* <div style={{color:"green",textAlign:"center"}}>
    <p>First select a custom date</p>
    <p>Then select food menu for each days</p>
    <p>use 'display all datas' button to display all selected food menus</p>
    
    </div> */}
   
        <div style={{display:"flex"}}>
            
         <div style={{padding:"10px",backgroundColor:"lightgrey",width:"20%",borderRadius:"8px",marginTop:"5%"}}>

             {
                 dateList.map(item=>
                    <Button onClick={()=>setDateval(item)} variant='success' style={{width:"100%",marginBottom:"10px",borderRadius:"6px",color:"white"}}>{item}</Button>
                    
                    )
             }
             
         <div>
             <label>Select custom date</label>
    <FormControl
        type="date"
        onChange={(e)=>{setDate(e.target.value)
        
        }}
      placeholder="date"
      aria-label="date"
      aria-describedby="basic-addon1"
    />
    <Link to="/display" className="btn btn-success" style={{width:"100%",marginTop:"20px"}}>Display all datas</Link>
    </div>
             
             </div>  
             <div style={{display:"flex",padding:"10px",backgroundColor:"#cee9fc",width:"80%",borderRadius:"8px",marginTop:"5%"}}>
             {(dateval!="")?<Foods date={dateval}/>:null}
             </div>
    
          </div>
          </>
    )
}
 
export default Home
