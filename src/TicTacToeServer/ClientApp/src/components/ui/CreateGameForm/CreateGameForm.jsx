import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const _styles = theme => ({
  inputRow: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  confirmRow: {
    marginTop: 2 * theme.spacing.unit
  },
  confirmButton: {
    width: "100%"
  }
});

function CreateGameForm({ classes, onSubmit }) {
  const [size, setSize] = useState(null);
  const [userName, setUserName] = useState("");
  const [invitationCode, setInvitationCode] = useState("");

  return (
    <div>
      <div className={classes.inputRow}>
        <TextField
          label="Size"
          variant="filled"
          value={size}
          onInput={e => setSize(e.target.value)}
        />
      </div>
      <div className={classes.inputRow}>
        <TextField
          label="Your Name"
          variant="filled"
          value={userName}
          onInput={e => setUserName(e.target.value)}
        />
      </div>
      <div className={classes.inputRow}>
        <TextField
          label="Invitation Code"
          variant="filled"
          value={invitationCode}
          onInput={e => setInvitationCode(e.target.value)}
        />
      </div>
      <div className={classes.confirmRow}>
        <Button
          className={classes.confirmButton}
          color="primary"
          variant="contained"
          onClick={() =>
            onSubmit({
              size: size,
              userName: userName,
              invitationCode: invitationCode
            })
          }
        >
          Create
        </Button>
      </div>
    </div>
  );
}

export default withStyles(_styles)(CreateGameForm);
