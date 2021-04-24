import "./App.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [inputString, setInputString] = useState("");
  const [result, setResult] = useState(null);

  function handleInputString(e) {
    setInputString(e);
  }
  async function handleCompress() {
    const { data } = await axios.post(
      `/api/`,
      {
        inputString,
        operation: "zip"
      }
    );
    console.log(data);
    setResult(data.compressed);
  }

  async function handleUnCompress() {
    const { data } = await axios.post(
      `api`,
      {
        inputString,
        operation: "unzip"
      }
    );
    console.log(data);
    setResult(data.uncompressed);
  }

  return (
    <div className="App">
      <h1>Helo World</h1>
      <input onChange={(e) => handleInputString(e.target.value)} />{" "}
      <button onClick={handleCompress}>COMPRESS </button>
      <button onClick={handleUnCompress}>UNCOMPRESS </button>
      <div>{result}</div>
    </div>
  );
}
