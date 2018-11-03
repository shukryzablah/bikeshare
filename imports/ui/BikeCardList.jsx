import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Bikes from '../api/bikes';
import BikeCard from './BikeCard';

class BikeCardList extends Component {

  renderBikes = () => {
    return this.props.bikes.map((bike => {
      return <BikeCard key={bike._id} name = {bike.name} status = {bike.status}/>
    }));
  }

  render() {
    return(
      <div>
        {this.renderBikes()}
      </div>
    );
  }
}


export default BikeCardListContainer = withTracker(() => {
  return {
    bikes: Bikes.find().fetch(),
  };
})(BikeCardList);