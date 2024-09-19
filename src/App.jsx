import NavBar from "./components/NavBar";
import HistoryCards from "./components/HistoryCards";
import './App.css'
import { useState } from "react";
const App=()=>
{
  const [values,next]=useState("");
  const handleSearchChange=(props)=>
  {
    next(props.target.value);
  }
  return(
    <>
      <div className="outer">
        <NavBar onSearchChange={handleSearchChange}/>  
        <HistoryCards dataValue={values}></HistoryCards>
        <div>
        </div>
      </div>
    </>
  )
};
export default App;