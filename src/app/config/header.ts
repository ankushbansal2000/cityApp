export const NAV_MODEL: Nav[] = [
  {
    url: 'shops',
    name: 'Shops',
    faIcon: 'fa-building-o',
  },
  // {
  //   url: 'master-categories',
  //   name: 'Master Categories',
  //   faIcon: 'fa-building-o'
  // },
  // {
  //   url: 'vendor',
  //   name: 'Vendor',
  //   faIcon: 'fa-vimeo'
  // },
  // {
  //   url: 'service-request',
  //   name: 'Service Request',
  //   faIcon: 'fa-universal-access'
  // },
  // {
  //   url: 'user',
  //   name: 'User',
  //   faIcon: 'fa-user-circle-o'
  // }
]

export interface Nav {
url: string;
name: string;
dropdown?: Dropdown[];
faIcon: string;
}

export interface Dropdown {
url: string;
name: string;
}
