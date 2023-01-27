import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { MyComponent } from "lunatic-dsfr/MyComponent";
import { makeStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

startReactDsfr({ defaultColorScheme: "system" });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);




function Root() {

  const [clickCount, setClickCount] = useState(0);

  const { classes } = useStyles({
    isMyDivBig: clickCount >= 3
  });

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
        onClick={() => setClickCount(clickCount + 1)}
      />
    </>
  );


}

const useStyles = makeStyles<{ isMyDivBig: boolean; }>({ name: { Root } })((theme, { isMyDivBig }) => ({
  myComponent: {
    marginTop: fr.spacing("12w"),
  },
  myDiv: {
    width: isMyDivBig ? 200 : 100,
    height: isMyDivBig ? 200 : 100,
    backgroundColor: theme.decisions.background.actionHigh.redMarianne.default,
    "&:hover": {
      backgroundColor: theme.decisions.background.actionHigh.redMarianne.hover,
    },
    [fr.breakpoints.down("md")]: {
      border: "1px solid black"
    }
  }
}));