import React from 'react';
import Dashboard from '../Components/Dashboard';
import Farmers from '../Components/Farmers';
import Buyers from '../Components/Buyers';
import FarmExp from '../Components/FarmExp';
import FarmersPost from '../Components/FarmersPosts';
import BuyersOrders from '../Components/BuyersPost';

// Private routes.
const dashboard = () => <Dashboard />;
const farmers = () => <Farmers />;
const buyers = () => <Buyers />;
const farmexp = () => <FarmExp />;
const farmerspost = () => <FarmersPost />;
const buyerspost = () => <BuyersOrders />;


export { dashboard, farmers, buyers, farmexp, farmerspost, buyerspost };
