import React from 'react';
import Dashboard from '../Components/Dashboard';
import Farmers from '../Components/Farmers';
import Buyers from '../Components/Buyers';
import FarmExp from '../Components/FarmExp';
// import DashboardPage from "../components/dashboard/Dashboard";

// Private routes.
const dashboard = () => <Dashboard />;
const farmers = () => <Farmers />;
const buyers = () => <Buyers />;
const farmexp = () => <FarmExp />;

export { dashboard, farmers, buyers, farmexp };
