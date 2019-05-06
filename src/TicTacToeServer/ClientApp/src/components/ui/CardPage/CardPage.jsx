import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

const _styles = theme => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: 350
  },
  cardTitleContainer: {
    textAlign: "center",
    background: theme.palette.primary.main,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  cardTitle: {
    color: theme.palette.primary.contrastText
  }
});

function CenteredCard({ classes, title, children }) {
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent className={classes.cardTitleContainer}>
          <Typography className={classes.cardTitle} variant="h5">
            {title}
          </Typography>
        </CardContent>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}

export default withStyles(_styles)(CenteredCard);
