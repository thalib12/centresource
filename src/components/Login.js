import {useState,React} from 'react'
import { Button,InputGroup,FormControl,Form,Modal} from 'react-bootstrap'
import { Link,useNavigate} from 'react-router-dom'
import "./Login.css"


function Login() {
  const navigate=useNavigate()

const [box,setBox]=useState(true)
const [user,setUser]=useState({})

const register=(e)=>{

  e.preventDefault()
  let phno=e.target[0].value
  let pswd=e.target[1].value
  if(phno!="" && pswd!=""){
  const data={phno,pswd}
  setUser(data)
  console.log(data);
  alert("Account created succesfully")
  }
  else{
    alert("invalid phone number or password")
  }
}

const login=(e)=>{
  e.preventDefault()
  let phno=e.target[0].value
  let pswd=e.target[1].value
   const data={phno,pswd}
   console.log(data,user);
   if(phno == user.phno && pswd==user.pswd){
     navigate('/home')
     alert("Login successful")
   }
   else{
     alert("Incorrect phone number or password")
   }

}


    

    return (
       <>
      

      {
        (box) ? <div className='registerbox'>
        <h3 className='mb-4' style={{textAlign:"center"}}>Login</h3>
        <Form onSubmit={login}>
        <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fas fa-mobile-alt"/></InputGroup.Text>
    <FormControl
      placeholder="Phone Number"
      aria-label="phno"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
 
  <InputGroup>
    <InputGroup.Text id="basic-addon1"><i class="fas fa-lock"/></InputGroup.Text>
    <FormControl
    type='password'
      placeholder="Password"
      aria-label="password"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
 
  <div className="d-grid gap-2 mt-4">
  <Button  variant="success" size="lg" type='submit'>
    Login
  </Button>
  </div>
</Form>
<p  style={{marginLeft:"10px",marginBottom:"0px"}}> Have you no account?</p>
<div className="d-grid gap-2">
<Button onClick={()=>setBox(false)} className="btn btn-dark my-2 rounded btn-lg" to="registration">Create new account</Button></div>
            
        </div>: <div className='registerbox'>
        <h3 className='mb-4' style={{textAlign:"center"}}>Register</h3>
        <Form onSubmit={register}>
        <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fas fa-mobile-alt"/></InputGroup.Text>
    <FormControl
      placeholder="Phone Number"
      aria-label="phno"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  
 
  <InputGroup>
    <InputGroup.Text id="basic-addon1"><i class="fas fa-lock"/></InputGroup.Text>
    <FormControl
    type='password'
      placeholder="New password"
      aria-label="password"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
 
  <div className="d-grid gap-2 mt-4">
  <Button variant="success" size="lg" type='submit'>
    Register
  </Button>
  </div>
</Form>
<p  style={{marginLeft:"10px",marginBottom:"0px"}}> Already have an account?</p>
<div className="d-grid gap-2">
<Button onClick={()=>setBox(true)}  className="btn btn-dark my-2 rounded btn-lg" to="registration">Login</Button></div>
            
        </div>


      }
       

       
       </>
    )
}

export default Login
