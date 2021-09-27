import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Loader from './Components/Loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Home = React.lazy(() => 
new Promise(resolve => {
  setTimeout(() => 
    resolve(import('./Components/Home')
  ), 1300);
}));
// import('./Components/Home'))

class App extends React.Component {
  render() { 
    return (
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route exact to="/" component={Home} />
        </Switch>
      </React.Suspense>
    );
  }
}
 
export default App;