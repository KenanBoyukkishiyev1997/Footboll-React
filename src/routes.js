import React from 'react';
import Layout from './Hoc/Layout';
import Home from './Components/home';
import SingIn from './Components/singin';

import PrivateRout from './Components/authRotuse/privateRoutes'
import PublicRout from './Components/authRotuse/publicRoutes'

import {Switch } from 'react-router-dom';


import Dashbord from './Components/admin/Dashbord';
import AdminMatches from './Components/admin/matches'
import AdminEditMatches from './Components/admin/matches/addEditMatch'

import AdminPlayers from './Components/admin/players'
import AdminEditPlayers from './Components/admin/players/addEditPlayers'
const Routes = (props) => {
  return (
    <Layout>
      <Switch>
      <PrivateRout  {...props} path='/admin_players/add_players' exact component={AdminEditPlayers} />
      <PrivateRout  {...props} path='/admin_players/add_players/:id' exact component={AdminEditPlayers} />
      <PrivateRout  {...props} path='/admin_players' exact component={AdminPlayers} />

      <PrivateRout  {...props} path='/admin_matches/edit_match' exact component={AdminEditMatches} />
      <PrivateRout  {...props} path='/admin_matches/edit_match/:id' exact component={AdminEditMatches} />
      <PrivateRout  {...props} path='/admin_matches' exact component={AdminMatches} />
        <PrivateRout  {...props} path='/dashbord' exact component={Dashbord} />
        <PublicRout  {...props} restricted={true} path='/sing_in' exact component={SingIn} />
        <PublicRout  {...props} restricted={false} path='/' exact component={Home} />
      </Switch>
    </Layout>
  )
}

export default Routes;
