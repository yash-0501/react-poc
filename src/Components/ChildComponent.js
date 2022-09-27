export const ChildComponent = (props) =>{
    return <div>
        <button onClick={() => props.greetHandler('child name comes here')}>
            Greet Parent
        </button>
    </div>
}