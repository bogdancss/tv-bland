import React, {Component} from 'react';
import './ShowList.scss';
import ShowListItem from '../components/ShowListItem';

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {requestFailed: false};
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/schedule')
    .then(response => {
      if (!response.ok) {
        throw new Error("Network request failed");
      }
      return response.json();
    })
    .then(data => {
      this.setState({shows: data});
    }, () => {
      this.setState({requestFailed: true});
    });
  }

  render() {
    if (this.state.requestFailed) return <p>Failed to load shows.<br/>Please check logs or try again.</p>;
    if (!this.state.shows) return <p>Loading...</p>;

    const shows = this.state.shows.map((show, key) => {
      return (<ShowListItem details={show} key={key} />);
    });
    return (
      <ul className="dashboard__show-list">
        {shows}
      </ul>
    );
  }
}
export default ShowList;
