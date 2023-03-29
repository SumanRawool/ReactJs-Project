import "./App.css";
import Header from "./components/Header";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Fields from "./components/Fields";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  return (
    <div className="App">
      <Header />
      {/* form */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="error">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <Fields name={element.name} email={element.email} index={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
