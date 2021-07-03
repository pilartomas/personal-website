import React, { FunctionComponent } from "react";
import {
  Typography,
  Link,
  makeStyles,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import { GitHub, LinkedIn, Email, Lock } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: "50vh",
    transform: "translateY(-50%)",

    borderStyle: "solid",
    borderWidth: 4,
    borderRadius: 16,
    borderColor: theme.palette.secondary.main,

    backgroundColor: theme.palette.background.default,
  },
}));

export const HomePage: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h2" color="primary" align="center">
            Tomas Pilar
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" color="primary" align="center">
            Software Developer
          </Typography>
        </Grid>
        <Grid item container justify="space-evenly">
          <Grid item>
            <Link
              href="https://github.com/pilartomas"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://linkedin.com/in/tomas-pilar-0b904b135/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn fontSize="large" />
            </Link>
          </Grid>
        </Grid>
        <Grid item container justify="space-evenly">
          <Grid item>
            <Button
              href="mailto:thomas7pilar@gmail.com"
              color="primary"
              startIcon={<Email />}
            >
              thomas7pilar@gmail.com
            </Button>
          </Grid>
          <Grid item>
            <Button
              href={`${process.env.PUBLIC_URL}/tomaspilar.pubkey.asc`}
              color="primary"
              startIcon={<Lock />}
            >
              PGP key
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
