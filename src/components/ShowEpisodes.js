import React, {Component} from 'react';
import moment from 'moment';
import './ShowEpisodes.scss';

class ShowEpisodes extends Component {
  constructor(props) {
    super(props);
    this.state = {requestFailed: false};
  }

  componentDidMount() {
    const showID = window.location.pathname.split('/show/')[1].split(/\/|\?/)[0];
    fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network request failed");
      }
      return response.json();
    })
    .then(data => {
      this.setState({episodes: data});
    }, () => {
      this.setState({requestFailed: true});
    });
  }

  render() {
    if (this.state.requestFailed) return <p>Failed to load episodes information.<br/>Please check logs or try again.</p>;
    if (!this.state.episodes) return <p>Loading...</p>;
    const noEpisodes = this.state.episodes.length ? null : (<p>No episodes found.</p>);
    const episodeRows = this.state.episodes.length ? this.state.episodes.reverse().map((result, i) => {
      return (
        <div className="show-page__episodes__row" key={i}>
          <div className="show-page__episodes__column-group-short">
            <p className="show-page__episodes__column-short">{result.season}</p>
            <p className="show-page__episodes__column-short">{result.number}</p>
          </div>
          <div className="show-page__episodes__column-group-long">
            <p className="show-page__episodes__column-med">{moment(result.airstamp).format('ll')}</p>
            <p className="show-page__episodes__column-long">{result.name}</p>
          </div>
        </div>
      )
    }) : null;

    return (
      <div className="show-page__episodes">
        <div className="page-content">
          <h2 className="show-page__episodes__title">Episodes</h2>
          <div className="show-page__episodes__row head">
            <div className="show-page__episodes__column-group-short">
              <p className="show-page__episodes__column-short">Season</p>
              <p className="show-page__episodes__column-short">Number</p>
            </div>
            <div className="show-page__episodes__column-group-long">
              <p className="show-page__episodes__column-med">Date</p>
              <p className="show-page__episodes__column-long">Name</p>
            </div>
          </div>
          {episodeRows}
          {noEpisodes}
        </div>
      </div>
    );
  }
}
export default ShowEpisodes;
