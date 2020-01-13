import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Dashboard from '../Components/Dashboard';
import Farmers from '../Components/Farmers';
import Buyers from '../Components/Buyers';
import FarmExp from '../Components/FarmExp';
import SignUp from '../Components/SignUp';
import Login from '../Components/Login';

const PublicRoutes = ({ match }) => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/signup' component={SignUp} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/farmers' component={Farmers} />
      <Route path='/buyers' component={Buyers} />
      <Route path='/farmexp' component={FarmExp} />
      <Route path='/login' component={Login} />
    </Switch>
  </div>
);

export default PublicRoutes;
