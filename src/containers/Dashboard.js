import React, {Component} from 'react';
import './Dashboard.scss';
import ShowList from '../components/ShowList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__intro-section">
          <div className="dashboard__description-wrapper page-content">
            <p className="dashboard__description">TV Show and web series database.</p>
            <p className="dashboard__description">Create personalised schedules. Episode guide, cast, crew and character information.</p>
          </div>
        </div>

        <div className="dashboard__show-list-container">
          <div className="page-content">
            <h2 className="dashboard__list-title">Last Added Shows</h2>
            <ShowList/>
          </div>
        </div>
      </div>

    );
  }
}
export default Dashboard;
