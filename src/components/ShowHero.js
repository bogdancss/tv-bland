import React, {Component} from 'react';
import './ShowHero.scss';
import {MdImage} from 'react-icons/lib/md';
import StarRating from '../components/StarRating';

class ShowHero extends Component {
  render() {
    const details = this.props.details;
    const roundedRating = Math.round((details.rating.average / 2) * 10) / 10;
    const ratingInfo = details.rating.average ? `${roundedRating}/5` : 'No ratings';
    return (
      <div className="show-page__hero page-content">
        <div className="show-page__hero__poster-container">
          <img src={details.image ? (details.image.original ? details.image.original : details.image.medium) : require('../assets/defaultPoster.png')} alt={`${details.name} poster`} className="show-page__hero__poster"/>
          <div className={`show-page__hero__poster-icon ${details.image ? '' : 'show'}`}><MdImage/></div>
        </div>
        <div className="show-page__hero__details-container">
          <StarRating rating={details.rating} />
          <span className="show-page__hero__rating-info">{ratingInfo}</span>
          <p className="show-page__hero__title">{details.name}</p>
          <div className="show-page__hero__summary" dangerouslySetInnerHTML={{__html: details.summary}}></div>
        </div>
      </div>
    );
  }
}
export default ShowHero;
