// component's config object.
const components = {
  dashboard: {
    component: 'dashboard',
    url: '/dashboard',
    module: 1
  },
  farmers: {
    component: 'farmers',
    url: '/farmers',
    module: 1
  },
  buyers: {
    component: 'buyers',
    url: '/buyers',
    module: 1
  },
  farmexp: {
    component: 'farmexp',
    url: '/farmexp',
    module: 1
  },
  farmerspost: {
    component: 'farmerspost',
    url: '/farmerspost',
    module: 1
  },
  buyerspost: {
    component: 'buyerspost',
    url: '/buyerspost',
    module: 1
  }
};

// modules for grouping.
const modules = {
  0: {
    title: 'Dashboard',
    icon: 'home',
    isExpendable: true
  }
};

// component's access to roles.
const { dashboard, farmers, buyers, farmexp, farmerspost,buyerspost } = components;
const rolesConfig = {
  farmers: {
    routes: [farmers, dashboard, farmexp, farmerspost, buyerspost]
  },
  buyers: {
    routes: [buyers, dashboard, farmerspost, buyerspost]
  },
  farmexp: {
    routes: [farmers, dashboard, farmexp]
  }
};

export { modules, rolesConfig };
