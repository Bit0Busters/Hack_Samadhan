import React, { useState } from 'react';
import "./App.css"; // Import CSS

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <h2>Mini Task:7</h2>
        <Counter />
        <hr />
        <LivePreview />
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <section>
      <h3 className="counter-title">Counter</h3>
      <div className="counter-row">
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <span className="count">{count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <div className="reset">
        <button onClick={() => setCount(0)} className="reset-btn">
          Reset
        </button>
      </div>
    </section>
  );
}

function LivePreview() {
  const [text, setText] = useState<string>("");

  return (
    <section>
      <h3 className="live-preview-title">Live Text Preview</h3>
      <input
        className="text-input"
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <p className="char-count">Characters: {text.length}</p>
      <div className="preview-box">
        {text ? text : "Your live preview will appear here…"}
      </div>
    </section>
  );
}
