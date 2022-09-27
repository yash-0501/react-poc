import React, { Component } from "react";
// import { PostForm } from "./Components/PostForm";
// import { Form } from "./Components/Form";
// import { PostList } from "./Components/PostList";
// import Greet from "./Components/Greet";
// import Message from "./Components/Message";
// import ClickHandler from "./Components/ClickHandler";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ParentComponent } from "./Components/ParentComponent";
// import { UserGreeting } from "./Components/UserGreeting";
// import { NameList } from "./Components/NameList";
// import { StyleSheet } from "./Components/StyleSheet";
// import { Inline } from "./Components/Inline";
// import styles from "./appStyles.module.css";
import NAMES from './Components/data.json'
import { useState, useTransition } from "react";


function App() {
  const [query,setQuery] = useState('')
  const [inputValue,setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const changeHandler = (event) =>{
    setInputValue(event.target.value)
    startTransition(()=> setQuery(event.target.value))
  }
  const filteredNames = NAMES.filter(item => {
    return item.first_name.includes(query) || item.last_name.includes(query)
  })
  return (
    <div className="container">
      {/* <Greet name="Yash"/> */}
      {/* <Message/> */}
      {/* <ClickHandler></ClickHandler> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <StyleSheet /> */}
      {/* <Inline />
      <h1 className={styles.headings}>CSS Module</h1> */}
      {/* <Form/> */}
      {/* <PostForm/>
      <PostList/> */}
      <input type="text" value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating....</p>}
        {
          filteredNames.map((item) =>(
            <p key={item.id}>{item.first_name} {item.last_name}</p>
          ))
        }
    </div>
  );
}

export default App;
