import React, { FunctionComponent, useRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    minWidth: "100vw",
    minHeight: "100vh",
  },
});

export const Background: FunctionComponent = () => {
  const classes = useStyles();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const context = canvasRef?.current?.getContext("2d");
    if (context) {
      context.fillStyle = "red";
      context.fillRect(event.clientX, event.clientY, 10, 10);
    }
  };

  return (
    <Box className={classes.root}>
      <AutoSizer>
        {({ height, width }) => (
          <canvas
            ref={canvasRef}
            height={height}
            width={width}
            onMouseMove={handleMouseMove}
          />
        )}
      </AutoSizer>
    </Box>
  );
};
