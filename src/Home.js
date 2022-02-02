import {Routes,Route} from 'react-router-dom';
import Login from './routes/Login';
import { AuthProvider } from './Auth/AuthProvider';
import RequiredAuth from './Auth/RequiredAuth';
import Posts from './routes/Posts';
import Post from './routes/Post';


export default function Home(){
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="posts" element={ <RequiredAuth><Posts/></RequiredAuth>}>
                    <Route path=":postId" element={<RequiredAuth><Post/></RequiredAuth>} />
                </Route>
            </Routes>
        </AuthProvider>
    )
}