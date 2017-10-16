import React from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import ShowPage from './containers/ShowPage';
import FourOFour from './containers/FourOFour';

// hacky way around react-hot-loader & react-router < v3
// https://github.com/gaearon/react-hot-boilerplate/pull/61
Router.prototype.componentWillReceiveProps = function(nextProps) {
  let components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  grabComponents(nextProps.routes || nextProps.children);
  components.forEach(React.createElement); // force patching
};

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/show/*" component={ShowPage} />
      <Route path="*" component={FourOFour} />
    </Route>
  </Router>
);
