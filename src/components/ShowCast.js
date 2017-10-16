import React, {Component} from 'react';
import {MdPerson} from 'react-icons/lib/md';
import './ShowCast.scss';

class ShowCast extends Component {
  constructor(props) {
    super(props);
    this.state = {requestFailed: false};
  }

  componentDidMount() {
    const showID = window.location.pathname.split('/show/')[1].split(/\/|\?/)[0];
    fetch(`http://api.tvmaze.com/shows/${showID}/cast`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network request failed");
      }
      return response.json();
    })
    .then(data => {
      this.setState({cast: data});
    }, () => {
      this.setState({requestFailed: true});
    });
  }

  render() {
    if (this.state.requestFailed) return <p>Failed to load show cast information.<br/>Please check logs or try again.</p>;
    if (!this.state.cast) return <p>Loading...</p>;
    const noCastInfo = this.state.cast.length ? null : (<p>No cast information found.</p>);
    const castRows = this.state.cast.length ? this.state.cast.slice(0,4).map((result, i) => {
      const castImage = result.person.image ? (
        <img src={result.person.image.medium} alt={`${result.person.name}`} className="show-page__cast__picture"/>
      ) : (<MdPerson/>);
      return (
        <div className="show-page__cast__row" key={i}>
          <div className="show-page__cast__picture-mask">
            {castImage}
          </div>
          <div className="show-page__cast__info-wrapper">
            <p className="show-page__cast__row-actor">{result.person.name}</p>
            <p className="show-page__cast__row-character">{result.character.name}</p>
          </div>
        </div>
      )
    }) : null;

    return (
      <div className="show-page__cast">
        <h2 className="show-page__cast__title">Starring</h2>
        {castRows}
        {noCastInfo}
      </div>
    );
  }
}
export default ShowCast;
