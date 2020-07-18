import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { Box, makeStyles, useTheme } from "@material-ui/core";

interface Beacon {
  center: {
    x: number;
    y: number;
  };
  radius: number;
  style: string;
}

const useStyles = makeStyles({
  root: {
    position: "fixed",
    minWidth: "100vw",
    minHeight: "100vh",
  },
});

export const Background: FunctionComponent = () => {
  const classes = useStyles();
  const {
    palette: { primary, secondary },
  } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [beacons, setBeacons] = useState<Beacon[]>([]);

  useEffect(() => {
    const id = setInterval(() => {
      const context = canvasRef?.current?.getContext("2d");
      if (canvasRef && canvasRef.current && context) {
        context.lineWidth = 4;
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        beacons.forEach(({ center: { x, y }, radius, style }) => {
          context.strokeStyle = style;
          context.beginPath();
          context.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);
          context.stroke();
        });
        const updatedBeacons = beacons.map((beacon) => ({
          ...beacon,
          radius: beacon.radius + 1,
        }));
        const filteredBeacons = updatedBeacons.filter(
          (beacon) => beacon.radius < 50
        );
        setBeacons(filteredBeacons);
      }
    }, 50);
    return () => clearInterval(id);
  });

  const onMouseDown = (x: number, y: number) =>
    setBeacons([
      ...beacons,
      {
        center: { x, y },
        radius: 0,
        style: Math.random() < 0.5 ? primary.main : secondary.main,
      },
    ]);

  return (
    <Box className={classes.root}>
      <AutoSizer>
        {({ height, width }) => (
          <canvas
            ref={canvasRef}
            height={height}
            width={width}
            onMouseDown={(event) => onMouseDown(event.clientX, event.clientY)}
          />
        )}
      </AutoSizer>
    </Box>
  );
};
