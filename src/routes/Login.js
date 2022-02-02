import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';
import Toast from '../comp/Toast';



export default function Login(props){
    console.log("props",props)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate= useNavigate();
    const {loggedIn,setLoggedIn} =useAuth();
    const [error,setError] = useState(false);
    const [showToast,setShowToast] = useState(false);

    useEffect(()=>{
        if(loggedIn){
            navigate('/posts');
        }
        if(error){
            setShowToast(true)
            setTimeout(()=>{
                setError(false);
                setShowToast(false)},1000)
        }
    },[loggedIn,error])
    
    const validateCredential=(e)=>{
        e.preventDefault();
        console.log(password === 123456)
        if(email==="test@yopmail.com" && Number(password)===123456){
            console.log("Entering")
            setLoggedIn(true);
        }else{
            setError(true);
        }
    }

    return (
        <div 
        style={{display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",}}>
            {showToast&&<Toast message='Login Failed' />}

            <h2>Login</h2>
            
            <div
            style={{display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            flexDirection:"column",
        width:"100%"}}
            >
                <input type="email" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="submit" onClick={validateCredential} style={{margin:"16px 8px"}}>Submit</button>
            </div>

        </div>
    )
}
