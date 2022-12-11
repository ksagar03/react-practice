import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import base from "./axios";

function App() {
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    base.get("/posts").then((res) => setApidata(res.data));
  }, []);

  return (
    <div className="App">
      {apidata.map((i) => {
        const { title, id, body } = i;
        return (
          <div className="block" key={id}>
            <h2>{title}</h2>{" "}
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
