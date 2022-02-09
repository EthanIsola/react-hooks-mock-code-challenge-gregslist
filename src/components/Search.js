import React, { useState } from "react";

function Search({ search, setSearch }) {

  //sets up a temporary searched text to prepare for submit
  const [tempSearch, setTemp] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch(tempSearch)
    console.log(search)
  }

  function handleChange(e) {
    setTemp(e.target.value)
    console.log(tempSearch)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={tempSearch}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
