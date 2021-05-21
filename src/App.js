import React from 'react';
import { Admin, fetchUtils, Resource } from 'react-admin';
import simpleRestProvider from 'ra-strapi-rest';
import { Dashboard } from './pages/Dashboard';
import { UserList } from './pages/Users/UserList';
import { UserCreate } from './pages/Users/UserCreate';
import { UserShow } from './pages/Users/UserShow';
import { UserEdit } from './pages/Users/UserEdit';
import { ConsoList } from './pages/Conso/ConsoList';
import PeopleIcon from '@material-ui/icons/People';
import EvStationIcon from '@material-ui/icons/EvStation';
import { ConsoShow } from './pages/Conso/ConsoShow';
import { ConsoCreate } from './pages/Conso/ConsoCreate';
import { ConsoEdit } from './pages/Conso/ConsoEdit';
import authProvider from './pages/authProvider';
import Cookies from './helpers/Cookies';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = Cookies.getCookie('token')
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://localhost:1337', httpClient);


const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="clients" list={UserList} show={UserShow} create={UserCreate} edit={UserEdit} icon={PeopleIcon} />
    <Resource name="consommations" list={ConsoList} show={ConsoShow} create={ConsoCreate} edit={ConsoEdit} icon={EvStationIcon} />
  </Admin>
);

export default App;
