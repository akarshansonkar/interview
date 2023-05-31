import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const App = () => {
  const [number, setNumber] = useState("abc");
  const output = () => {
    return fetch(`http://localhost:3000/input?first=5&sec=10`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setNumber(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <TextField
          id="outlined-basic"
          label="first"
          name="first"
          variant="outlined"
        ></TextField>
        <TextField
          id="outlined-basic"
          label="sec"
          name="sec"
          variant="outlined"
        ></TextField>
        <Button onClick={output}> submit</Button>
      </header>

      <p>{number}</p>
    </div>
  );
};

export default App;
