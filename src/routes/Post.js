import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Post(){
    const [post,setPost] = useState(null);
    const {postId} =useParams();

    useEffect(()=>{
        async function invokeApi(){
            const post =await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            setPost(post.data);
        }
        invokeApi();      
    },[postId]);

    if(post!==null){
        return (<div className="card">
            <div><b>Title :</b>{post.title}</div><br/>
            <div><b>Body :</b>{post.body}</div>
        </div>);
    }
    return "Loading..."
}