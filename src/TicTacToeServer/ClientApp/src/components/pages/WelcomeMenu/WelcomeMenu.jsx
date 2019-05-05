import React, { Component } from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import CardPage from "../../ui/CardPage";

const _options = [
  { title: "Create a New Game", path: "/app/create_game" },
  { title: "Join an Existing Game", path: "/app/join_game" },
  { title: "About", path: "/app/about" }
];

const _styles = theme => ({});

class WelcomeMenu extends Component {
  render() {
    return (
      <CardPage title="Welcome!">
        <List>
          {_options.map((item, index) => {
            return (
              <ListItem key={index} button component={Link} to={item.path}>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </CardPage>
    );
  }
}

export default withStyles(_styles)(WelcomeMenu);
