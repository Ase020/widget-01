import { useState } from "react";

import "./App.css";

const buttonWidth = 64;
const tabWidth = 300;
const tabHeaders = ["home", "lock", "settings"];
const tabContent = [];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="App">
      <header>
        {tabHeaders.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveIndex(i)}
            className={`material-symbols-outlined ${
              activeIndex === i ? "active" : ""
            }`}
          >
            <i class="material-icons-outlined">{tab}</i>
          </button>
        ))}
        <div
          className="underline"
          style={{
            translate: `${activeIndex ? activeIndex * buttonWidth : 0}px 0`,
          }}
        ></div>
      </header>

      <div className="content">
        <div
          className="content-inner"
          style={{
            translate: `-${activeIndex ? activeIndex * tabWidth : 0}px 0`,
          }}
        >
          <div>Home</div>
          <div>Lock</div>
          <div>Settings</div>
        </div>
      </div>
    </article>
  );
}

export default App;
