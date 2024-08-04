import "./styles.css";
import { useState } from "react";
import { Alert, Grid, Snackbar } from "@mui/material";
import GridLine from "./GridLine";

export default function App() {
  const [firstClick, setFirstClick] = useState(true);
  const [firstCoord, setFirstCoord] = useState([null, null]);
  const [errorCounter, setErrorCounter] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });
  const [foundCells, setFoundCells] = useState([]);

  const grid = [
    "ocdmedalepgnselteli",
    "vicpiloonrateumarot",
    "akepsgbnatsisovdtum",
    "dbrvedreteynzkerpti",
    "auagypzgbgcitvauofh",
    "eztaguiumpnaixktinq",
    "lyiswbzoroavrtennxo",
    "inusoywrhinmoqrkcqg",
    "pagmckuvertllfcwase",
    "kndubtsrtenavnrpmes",
    "gtalkeenoudpossoybi",
    "bypierreetbidoulove",
  ];

  const correctCombination = [
    "guitare",
    "pep",
    "pub",
    "mob",
    "stan",
    "rouge",
    "vert",
    "nancy",
    "loritz",
    "ska",
    "art",
    "poinca",
  ];

  const getString = (x1, y1, x2, y2) => {
    const lengthY = Math.abs(y1 - y2);

    console.log(x1, x2);
    let allX = [];
    let allY = [];
    if (x1 < x2) {
      for (let x = x1; x <= x2; x++) {
        allX.push(x);
      }
    } else if (x1 > x2) {
      for (let x = x1; x >= x2; x += -1) {
        allX.push(x);
      }
    } else if (x1 === x2) {
      allX = [x1];
    }

    if (y1 < y2) {
      for (let x = y1; x <= y2; x++) {
        allY.push(x);
      }
    } else if (y1 > y2) {
      for (let x = y1; x >= y2; x += -1) {
        allY.push(x);
      }
    } else if (y1 === y2) {
      allY = [y1];
    }

    let string = "";
    if (allX.length === allY.length) {
      for (let x = 0; x < allX.length; x++) {
        string = string + grid[allX[x]].charAt(allY[x]);
      }
    } else if (allX.length > 1) {
      let y = allY[0];
      for (let x of allX) {
        string = string + grid[x].charAt(y);
      }
    } else if (allY.length > 1) {
      let x = allX[0];
      for (let y of allY) {
        string = string + grid[x].charAt(y);
      }
    }

    // check if we have a correct combinaison
    if (correctCombination.includes(string)) {
      setSnackbar({ open: true, message: "Bravo!", severity: "success" });
      let completed = [];
      if (allX.length === 1) {
        for (let y of allY) {
          completed.push([allX[0], y]);
        }
      } else if (allY.length === 1) {
        for (let x of allX) {
          completed.push([x, allY[0]]);
        }
      } else {
        for (let x = 0; x < allY.length; x++) {
          completed.push([allX[x], allY[x]]);
        }
      }
      setFoundCells([...foundCells, ...completed]);
    } else if (string === "bypierreetbidoulove") {
      setSnackbar({
        open: true,
        message: "<3",
        severity: "success",
      });
    } else {
      let oString = "o";
      for (let x = 0; x < errorCounter; x++) {
        oString = oString + "o";
      }
      setSnackbar({
        open: true,
        message: "N" + oString + "pe",
        severity: "error",
      });
      setErrorCounter(errorCounter + 1);
    }
  };

  const checkClick = (x, y) => {
    if (firstClick) {
      setFirstCoord([x, y]);
      setFirstClick(false);
    } else {
      secondCoord = [x, y];
      getString(firstCoord[0], firstCoord[1], x, y);
      setFirstClick(true);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Bonne chance les p'tits loups!</h2>
      <Grid container spacing={0} columns={19}>
        <GridLine
          string={grid[0]}
          x={0}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[1]}
          x={1}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[2]}
          x={2}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[3]}
          x={3}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[4]}
          x={4}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[5]}
          x={5}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[6]}
          x={6}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[7]}
          x={7}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[8]}
          x={8}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[9]}
          x={9}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[10]}
          x={10}
          checkClick={checkClick}
          foundCells={foundCells}
        />
        <GridLine
          string={grid[11]}
          x={11}
          checkClick={checkClick}
          foundCells={foundCells}
        />
      </Grid>

      <p>Guitare</p>
      <p>Pep</p>
      <p>Pub</p>
      <p>Mob</p>
      <p>Stan</p>
      <p>Rouge</p>
      <p>Vert</p>
      <p>Nancy</p>
      <p>Ska</p>
      <p>Art</p>
      <p>Loritz</p>
      <p>Poinca</p>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbar.open}
        onClose={() => setSnackbar({ open: false, message: "", severity: "" })}
      >
        <Alert elevation={6} variant="filled" severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
