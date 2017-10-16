import React, {Component} from 'react';
import {Link} from 'react-router';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="tv-bland">
        <header className="tv-bland__header">
          <div className="page-content">
            <Link title="TV Bland" to={`/`} className="tv-bland__title">TV Bland</Link>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
