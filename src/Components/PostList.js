import { useState, useEffect } from "react"

export const PostList = () =>{
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch((err)=>{
                console.log(err)
            })
    }, [])
    return <div>
        <ul>
            {
                posts.map((post,index) =>{
                    return <li key={post.id}>{index+1}. {post.title}</li>
                })
            }
        </ul>
    </div>
}