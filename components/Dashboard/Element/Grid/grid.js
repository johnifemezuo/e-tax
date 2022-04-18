import React from "react";
import Grid from "../../components/Dashboard/AdminLayouts/Grid/Grid";
import GridChild from "../../components/Dashboard/AdminLayouts/Grid/GridChild";

function grid() {
  return (
    <div>
      <Grid sm={2} md={2} lg={4}>
        <GridChild className="bg-red-500 ">
          <h1>Hello </h1>
        </GridChild>

        <GridChild className="bg-red-500 ">
          <h1>Hello </h1>
        </GridChild>

        <GridChild className="bg-red-500 ">
          <h1>Hello </h1>
        </GridChild>
      </Grid>
    </div>
  );
}

export default grid;
