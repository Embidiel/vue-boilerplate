import Dashboard from "@/screens/dashboard/root-dashboard";
import Profile from "@/screens/profile/root-profile";
import Settings from "@/screens/settings/root-settings";

import {ROUTE_DASHBOARD, ROUTE_PROFILE, ROUTE_SETTINGS} from './route-constants';

export default [
  {
    path: '/',
    name: ROUTE_DASHBOARD,
    component: Dashboard,
    redirect: {name: ROUTE_PROFILE},
    children: [
      {
        path: '/dashboard/profile',
        name: ROUTE_PROFILE,
        component: Profile
      },
      {
        path: '/dashboard/settings',
        name: ROUTE_SETTINGS,
        component: Settings
      }
    ]
  }
]
