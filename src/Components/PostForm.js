import { useState } from "react"

export const PostForm = ()  =>{
    
    const [userId, setUserId] = useState('')
    const [title, setTtile] = useState('')
    const [body, setBody] = useState('')

    const submitHandler = (event) =>{
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    return <form onSubmit={submitHandler}>
        <div>
            <input 
                type="text" 
                placeholder='user id' 
                value={userId}
                onChange={e => setUserId(e.target.value)}
            />
        </div>
        <div>
            <input 
                type="text" 
                placeholder='title' 
                value={title} 
                onChange={e => setTtile(e.target.value)}
            />
        </div>
        <div>
            <input 
                type="text" 
                placeholder='body' 
                value={body} 
                onChange={e => setBody(e.target.value)}
            />
        </div>
        <button type="submit" >Submit Form</button>
    </form>
}