import { Grid } from "@mui/material";

const GridLine = ({ string, x, checkClick, foundCells }) => {
  return string.split("").map((letter, index) => (
    <Grid
      item
      xs={1}
      sx={{
        border: "1px solid black",
        backgroundColor:
          foundCells.findIndex((cell) => cell[0] == x && cell[1] == index) != -1
            ? "green"
            : "",
      }}
      onClick={() => checkClick(x, index)}
    >
      {letter}
    </Grid>
  ));
};

export default GridLine;
