//My-task
import React, { useState } from "react";
import "./Pooja.css";
import PoojaList from "./PoojaList";

function App() {
  let [isTrue, setIsTrue] = useState(false);

  const handleToggle = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="App-pooja">
      <section>
        <div className="Head-Text">
          <h1>Pooja</h1>
          <hr className="hr-pooja"/>
          <div className="switch-bookbtn-pooja">
            <button
              onClick={handleToggle}
              className={isTrue ? "btnfalse" : "btntrue"} // Inverted class names
              disabled={!isTrue}
            >
              Pooja
            </button>
            <button
              onClick={handleToggle}
              className={isTrue ? "btntrue" : "btnfalse"} // Inverted class names
              disabled={isTrue}
            >
              Pooja Booked
            </button>
          </div>
          {!isTrue && <PoojaList />}
        </div>
      </section>
    </div>
  );
}

export default App;
