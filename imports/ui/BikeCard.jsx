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
      <Card className="card">
        <CardContent className="card_content">
          <div className="card_content-icon">
            {this.getIcon(this.props.status)}
          </div>
          <Typography variant="h5" component="h2" className="card_content-title">
            {this.props.name}
          </Typography>
        </CardContent>
        <CardActions className="card_actions">
          <FormDialog id={this.props.id} action="check out" newStatus="Checked out" className="card_actions-child"/>
          <FormDialog id={this.props.id} action="check in" newStatus="Available" className="card_actions-child"/>
          <FormDialog id={this.props.id} action="withdraw" newStatus="Broken" className="card_actions-child"/>
        </CardActions>
      </Card>
    );
  }
}

export default BikeCard;