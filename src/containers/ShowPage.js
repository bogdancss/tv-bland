import React, {Component} from 'react';
import './ShowPage.scss';
import ShowHero from '../components/ShowHero';
import ShowInfo from '../components/ShowInfo';
import ShowCast from '../components/ShowCast';
import ShowEpisodes from '../components/ShowEpisodes';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {requestFailed: false};
  }

  componentDidMount() {
    const showID = window.location.pathname.split('/show/')[1].split(/\/|\?/)[0];
    fetch(`http://api.tvmaze.com/shows/${showID}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network request failed");
      }
      return response.json();
    })
    .then(data => {
      this.setState({ details: data });
    }, () => {
      this.setState({requestFailed: true});
    });
  }

  render() {
    if (this.state.requestFailed) return <p>Failed to load show information.<br/>Please check logs or try again.</p>;
    if (!this.state.details) return <p>Loading...</p>;

    return (
      <div className="show-page">
        <div className="show-page__intro-section">
          <ShowHero details={this.state.details}/>
        </div>

        <div className="show-page__details-section">
          <div className="page-content">
            <ShowInfo details={this.state.details}/>
            <ShowCast/>
          </div>
        </div>
        <div className="show-page__episodes-section">
          <ShowEpisodes/>
        </div>
      </div>

    );
  }
}
export default Dashboard;
