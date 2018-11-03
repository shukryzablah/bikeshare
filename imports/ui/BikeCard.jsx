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

  getIcon = (icon) => {
    if(icon === "Available") {
      return <DirectionsBike/>
    } else if(icon === "Broken") {
      return <Warning/>
    } else if(icon === "Checked out") {
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
          <FormDialog action="check out"/>
          <FormDialog action="check in"/>
          <FormDialog action="withdraw"/>
        </CardActions>
      </Card>
    );
  }
}

export default BikeCard;