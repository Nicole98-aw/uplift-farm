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
const { dashboard, farmers, buyers, farmexp } = components;
const rolesConfig = {
  farmers: {
    routes: [farmers, dashboard, farmexp]
  },
  buyers: {
    routes: [buyers, dashboard]
  },
  farmexp: {
    routes: [farmers, dashboard, farmexp]
  }
};

export { modules, rolesConfig };
