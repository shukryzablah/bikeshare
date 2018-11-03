  import React, { Component } from 'react';
  
  import Button from '@material-ui/core/Button';
  import TextField from '@material-ui/core/TextField';
  import Dialog from '@material-ui/core/Dialog';
  import DialogActions from '@material-ui/core/DialogActions';
  import DialogContent from '@material-ui/core/DialogContent';
  import DialogContentText from '@material-ui/core/DialogContentText';
  import DialogTitle from '@material-ui/core/DialogTitle';

  import Bikes from '../api/bikes';
  import Patrons from '../api/patrons';

  class FormDialog extends Component {
    constructor(props) {
      super(props);

      this.state = {
        open: false,
      };
    }
  
    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

    doUpdateBike = () => {
      let newPatron;
      if(this.props.newStatus === "Checked out") {
        newPatron = "John Smith";
      } else {
        newPatron = "NONE";
      }
      Bikes.update(this.props.id, {

        $set: { status: this.props.newStatus , patron: newPatron },
  
      });
    }

    updateAndClose = () => {
      this.doUpdateBike();
      this.handleClose();
    }
  
    render() {

      return (
        <div>
          <Button onClick={this.handleClickOpen}>{this.props.action}</Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">{this.props.action}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Swipe the patron's id to {this.props.action} a bike.
              </DialogContentText>
              <TextField
                id="standard-with-placeholder"
                label="Input Patron ID"
                placeholder="210212300292668"
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.updateAndClose} color="primary">
                {this.props.action}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
  
  export default FormDialog;