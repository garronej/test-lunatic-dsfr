import React from "react";
import ReactDOM from "react-dom/client";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { MyComponent } from "lunatic-dsfr/MyComponent";
import { fr } from "@codegouvfr/react-dsfr";
import { makeStyles } from "tss-react/dsfr";

startReactDsfr({ defaultColorScheme: "system" });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);


function Root() {

  const { classes } = useStyles();

  return (
    <>
      <Badge severity="success">
        Label badge
      </Badge>
      <MyComponent
        className={classes.myComponent}
      />
      <div
        className={classes.myDiv}
      />
    </>
  );


}

const useStyles = makeStyles()(theme => ({
  myComponent: {
    marginTop: fr.spacing("12w"),
  },
  myDiv: {
    width: 100,
    height: 100,
    backgroundColor: theme.decisions.background.actionHigh.redMarianne.default,
    "&:hover": {
      backgroundColor: theme.decisions.background.actionHigh.redMarianne.hover,
    },
    [fr.breakpoints.down("md")]: {
      border: "1px solid black"
    }
  }
}));