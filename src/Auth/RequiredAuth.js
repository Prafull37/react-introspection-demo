import { useAuth} from "./AuthProvider";
import { Navigate } from "react-router-dom";

export default function RequiredAuth(props){
    const {loggedIn} = useAuth();

    if(!loggedIn){
        return <Navigate to="/"/>
    }
    return props.children;
}