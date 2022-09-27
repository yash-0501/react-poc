export const NameList = () => {
    const names = ['Bruce', 'Clark', 'Diana']
    return <div>
        {   
            names.map((name, index)=>{
                return <h2 key={name}>{index+1}. {name}</h2>
            })
        }
    </div>
}