import Dashboard from 'app/Dashboard/Dashboard';
import Page from 'app/Page/Page';

import { routes } from '../constants/routes.js';

var dashRoutes = [
    { linkOnly: true, path: routes.DASHBOARD, component: Dashboard },

    { path: routes.DASHBOARD, name: "Dashboard", icon: "business_globe", component: Dashboard },
    { path: routes.PAGE, name: "Page", icon: "ui-1_email-85", component: Page },
    { collapse: true, name: "Menu", state: "openConfigs", icon: "loader_gear", views: [
            { path: routes.PAGE, name: "Submenu", mini: "SB", component: Page },
        ]
    },

    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" },
];

export default dashRoutes;
