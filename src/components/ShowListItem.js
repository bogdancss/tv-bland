import React, {Component} from 'react';
import {Link} from 'react-router';
import './ShowListItem.scss';
import {MdImage} from 'react-icons/lib/md';
import StarRating from '../components/StarRating';

class ShowListItem extends Component {
  render() {
    const details = this.props.details;
    return (
      <li className="dashboard__show-item">
        <Link title={details.show.name} to={`/show/${details.show.id}`} className="dashboard__show-item__link"></Link>
        <div className="dashboard__show-item__poster-container">
          <img src={details.show.image ? details.show.image.medium : require('../assets/defaultPoster.png')} alt={`${details.show.name} poster`} className="dashboard__show-item__poster"/>
          <div className={`dashboard__show-item__poster-icon ${details.show.image ? '' : 'show'}`}><MdImage/></div>
        </div>
        <StarRating rating={details.show.rating} />
        <p className="dashboard__show-item__show-title">{details.show.name}</p>
        <p className="dashboard__show-item__episode-title">{details.name}</p>
      </li>
    );
  }
}
export default ShowListItem;
