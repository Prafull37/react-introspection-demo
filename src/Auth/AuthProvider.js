import { createContext,useState,useContext} from "react";

export const Auth=createContext(null);

export function AuthProvider(props){
    const [isLoggedIn,setLoggedIn]=useState(false);
    const value ={
        loggedIn:isLoggedIn,
        setLoggedIn:setLoggedIn
    }
    return (
        <Auth.Provider value={value}>
            {props.children}
        </Auth.Provider>
    )
}

export const useAuth=()=>{
    const context = useContext(Auth);
    return context;
}

