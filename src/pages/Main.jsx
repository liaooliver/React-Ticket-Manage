import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import uuid from 'uuid/dist/v1';
import Home from './Home';
import Overview from './Overview';
import Dashboard from './Dashboard';

import ImageContainer from '../components/util/ImageContainer';

import NoticeContextProvider from '../hooks/NoticeContext';

import logo from '../assets/images/task.png';
import setting from '../assets/icons/settings.png';
import logout from '../assets/icons/log-out.png';
import profile from '../assets/icons/profile.png';

const Main = () => {
  return (<Router>
    <div className="relative flex justify-end">
      <div className="flex flex-col p-3 w-2/12 h-screen shadow-md fixed inset-y-0 left-0">
        <Link to="/">
          <ImageContainer src={logo} size="100" text="TASK" container="w-3/12" margin='my-4' />
        </Link>
        <nav className="w-100 flex-none border-black flex-grow ">
          <ul>
            <Link to="/overview">
              <li key={uuid()} className="p-2 hover:bg-blue-100 rounded-full text-center cursor-pointer">Overview</li>
            </Link>
            <Link to="/dashboard">
              <li key={uuid()} className="p-2 hover:bg-blue-100 rounded-full text-center cursor-pointer">Dashboard</li>
            </Link>
          </ul>
        </nav>
        <div className="flex justify-between px-4">
          <ImageContainer size="75" src={profile} alt="profile" />
          <ImageContainer size="75" src={setting} alt="setting" />
          <ImageContainer size="75" src={logout} alt="logout" />
        </div>
      </div>

      <div className="w-10/12 px-8 py-6">
          <NoticeContextProvider>
            <Switch>
              <Route exact path="/overview" component={Overview} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/" component={Home} />
            </Switch>
          </NoticeContextProvider>
      </div>
    </div>
  </Router>);
}

export default Main;