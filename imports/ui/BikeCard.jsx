import React, { Component } from 'react';

import FormDialog from './FormDialog';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DirectionsBike from '@material-ui/icons/DirectionsBike';
import Warning from '@material-ui/icons/Warning';
import Block from '@material-ui/icons/Block';

class BikeCard extends Component {

  constructor(props) {
    super(props);
  }

  getIcon = (status) => {
    if(status === "Available") {
      return <DirectionsBike/>
    } else if(status === "Broken") {
      return <Warning/>
    } else if(status === "Checked out") {
      return <Block/>
    }
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {this.props.name}
          </Typography>
          {this.getIcon(this.props.status)}
        </CardContent>
        <CardActions>
          <FormDialog id={this.props.id} action="check out" newStatus="Checked out"/>
          <FormDialog id={this.props.id} action="check in" newStatus="Available"/>
          <FormDialog id={this.props.id} action="withdraw" newStatus="Broken"/>
        </CardActions>
      </Card>
    );
  }
}

export default BikeCard;