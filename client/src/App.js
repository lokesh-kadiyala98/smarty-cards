import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Loader from './Components/Loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const Home = React.lazy(() => import('./Components/Home'));
const TemplatePicker = React.lazy(() => import('./Components/TemplatePicker'));
const NotFound = React.lazy(() => import('./Components/Strips/NotFound'));

class App extends React.Component {
  render() { 
    return (
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/choose-template" component={TemplatePicker} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Suspense>
    );
  }
}
 
export default App;