import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  //sets search name
  const [search, setSearch] = useState("")

  return (
    <div className="app">
      <Header search = {search} setSearch = {setSearch}/>
      <ListingsContainer search = {search}/>
    </div>
  );
}

//keeping deleted item for testing purposes
// {
//   "id": 1,
//   "description": "heater",
//   "image": "./images/heater.jpg",
//   "location": "BROOKLYN"
// },

export default App;
