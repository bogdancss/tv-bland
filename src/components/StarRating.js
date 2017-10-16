import React, {Component} from 'react';
import {MdStar, MdStarBorder} from 'react-icons/lib/md';
import './StarRating.scss';

class StarRating extends Component {
  render() {
    const thisManyStars = this.props.rating ? Math.round(this.props.rating.average / 2) : 0;
    let stars = [];
    for (let fullStars=0; fullStars<thisManyStars; fullStars++) {
      stars.push((<span className="dashboard__show-item__rating-star" key={fullStars}><MdStar/></span>));
    }
    for (let emptyStars=thisManyStars; emptyStars<5; emptyStars++) {
      stars.push((<span className="dashboard__show-item__rating-star" key={emptyStars}><MdStarBorder/></span>));
    }

    return (
      <div className="dashboard__show-item__rating-container">
        {stars}
      </div>
    );
  }
}
export default StarRating;
