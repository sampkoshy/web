import React, { useContext } from 'react'
import { useEffect ,useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utlis/localStorage'
import { Authcontext } from './context/AuthProvider'

const App = () => {


  const [user, setuser] = useState(null)
  const authData =useContext(Authcontext)
  useEffect(() => {
   if(authData){
    const loggedInUser = localStorage.getItem("loggedInUser")
    setuser(loggedInUser.role)
   }
  
}, [])
  
  

  const handleLogin =( email,password)=>{
    if(email == 'admin@gmail.com' && password =='123'){
     setuser('admin')
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setuser('empolyee')
      localStorage.setItem("loggedInUser",JSON.stringify({role:'empolyee'}))}
      else{
      alert("invalid creentails")
    }

  }
 
  
  return (
    <>
    
    
  {!user ?<Login handleLogin={handleLogin}/>:''  }
   {user == 'admin' ? <AdminDashboard/>:<EmployeeDashboard/>}
   

    
    </>
  )
}

export default App