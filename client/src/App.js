import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore';
import Loader from './Components/Loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


const Home = React.lazy(() => import('./views/Home'));
const TryOut = React.lazy(() => import('./views/TryOut'));
const NotFound = React.lazy(() => import('./Components/Strips/NotFound'));

const store = configureStore()

class App extends React.Component {
  render() { 
    return (
      <Provider store={store}>
        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/try-out" component={TryOut} />
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </React.Suspense>
      </Provider>
    );
  }
}
 
export default App;