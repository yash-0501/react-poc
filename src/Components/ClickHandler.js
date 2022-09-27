const ClickHandler = () =>{
    const clickHandler = (event, count=1) =>{
        console.log("ButtonClicked", count)
    }
    return <div>
        <button onClick={clickHandler}>Click 1</button>
        <button onClick={(event) => clickHandler(event,5)}>Click</button>
    </div>
}

export default ClickHandler