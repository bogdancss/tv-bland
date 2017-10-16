import React, {Component} from 'react';
import './ShowInfo.scss';

class ShowInfo extends Component {
  render() {
    const details = this.props.details;
    let scheduleDays = '';
    if (details.schedule.days.length) {
      scheduleDays = `${details.schedule.days[0]}s`;
      if (details.schedule.days.length > 1) {
        details.schedule.days.map((result, i) => {
          if (i !== 0) {
            scheduleDays += `, ${result}s`;
          }
          return true;
        });
      }
    } else {
      scheduleDays = 'No information found';
    }

    let genres = '';
      if (details.genres.length) {
      genres = details.genres[0];
      if (details.genres.length > 1) {
        details.genres.map((result, i) => {
          if (i !== 0) {
            genres += `, ${result}`;
          }
          return true;
        });
      }
    } else {
      genres = 'No information found';
    }

    return (
      <div className="show-page__info">
        <h2 className="show-page__info__title">Show Info</h2>
        <div className="show-page__info__row">
          <p className="show-page__info__row-label">Streamed on</p>
          <p className="show-page__info__row-info">{details.network.name ? details.network.name : 'No information found'}</p>
        </div>
        <div className="show-page__info__row">
          <p className="show-page__info__row-label">Schedule</p>
          <p className="show-page__info__row-info">{scheduleDays}</p>
        </div>
        <div className="show-page__info__row">
          <p className="show-page__info__row-label">Status</p>
          <p className="show-page__info__row-info">{details.status ? details.status : 'No information found'}</p>
        </div>
        <div className="show-page__info__row">
          <p className="show-page__info__row-label">Genre</p>
          <p className="show-page__info__row-info">{genres}</p>
        </div>
      </div>
    );
  }
}
export default ShowInfo;
