import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

const _options = [
  { title: "Create a New Game", path: "/app/create_game" },
  { title: "Join an Existing Game", path: "/app/join_game" },
  { title: "About", path: "/app/about" }
];

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

class WelcomeMenu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.cardTitleContainer}>
            <Typography className={classes.cardTitle} variant="h5">
              Welcome!
            </Typography>
          </CardContent>
          <CardContent>
            <List>
              {_options.map((item, index) => {
                return (
                  <ListItem key={index} button component={Link} to={item.path}>
                    <ListItemText>{item.title}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(_styles)(WelcomeMenu);
