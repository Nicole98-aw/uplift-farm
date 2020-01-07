import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Farmers from './Components/Farmers';
import Buyers from './Components/Buyers';
import FarmExp from './Components/FarmExp';
import Navbar from './Components/Navbar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/farmers' component={Farmers} />
          <Route path='/buyers' component={Buyers} />
          <Route path='/farmexp' component={FarmExp} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
