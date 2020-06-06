import {ROUTE_PROFILE, ROUTE_SETTINGS} from "@/router/route-constants";

export const NAV_MENU_ONE_KEY = 'KeyOne';
export const NAV_MENU_ONE = {
  key: NAV_MENU_ONE_KEY,
  icon: 'user',
  title: 'Vue Boilerplate',
  menuItems: [
    {
      key: ROUTE_PROFILE,
      title: ROUTE_PROFILE,
      icon: 'user'
    },
    {
      key: ROUTE_SETTINGS,
      title: ROUTE_SETTINGS,
      icon: null
    }
  ]
};

export const NAV_MENU_LIST = [
  NAV_MENU_ONE
]
