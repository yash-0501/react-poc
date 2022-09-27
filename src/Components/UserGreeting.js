export const UserGreeting = () =>{
    const isLoggedIn = false
    return <div>
        Welcome {isLoggedIn ? 'Yash' : 'Guest'}
        <br/>
        {isLoggedIn && 'Hello, How are you?'}
    </div>
}