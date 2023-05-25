import { useState } from "react";

export default function TodoApp() {
  const [title, setTitle] = useState ("Hola");

  function handaleClick(e){
    e.preventDefault();
    setTitle("Yo.");
  }

  function handleChange(event) {
    const value = event.target.value;

    setTitle(value);
  }

  return (
  <div className="todoContaimer">
    <form className="todoCreateForm">
      <input onChange={handleChange} className="todoInput" value={title} />
      <input 
      onClick={handaleClick}
      type="submit" 
      value="Create todo" 
      className="buttonCreate" 
      />
    </form>
  </div>
  );
}