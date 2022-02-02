import {useState,useEffect} from 'react';
import {Link,Outlet,useOutlet} from 'react-router-dom';
import axios from 'axios';

export default function Posts(){
    const [posts,setPosts] = useState([]);
    const data = useOutlet();
    //console.log(data);

    useEffect(()=>{
        async function invokeApi(){
            const posts =await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(posts.data);
        }
        invokeApi();
    },[])


    if(posts.length>0){
        return (
            <div className='cardContainer'>
                {!!data ? <Outlet/> :<>
                {posts.map((post)=><Link to={`/posts/${post.id}`} className='card'>
                    <span>{post.title}</span>
                </Link>)}</>}
            </div>
        )

    }
    return "Loading...."
}