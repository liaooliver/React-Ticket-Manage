import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Overview from './Overview';
import Dashboard from './Dashboard';
import Create from './Create';

import ImageContainer from '../components/util/ImageContainer';
import LinkItem from '../components/util/LinkItem';
import SettingGroup from '../components/util/SettingGroup';

import NoticeContextProvider from '../hooks/context/NoticeContext';

import logo from '../assets/images/task.png';


const Main = () => {
  return (
    <Router>
      <div className="relative flex justify-end">
        <div className="flex flex-col p-3 w-2/12 h-screen shadow-md fixed inset-y-0 left-0">
          <Link to="/">
            <ImageContainer src={logo} size="100" text="TASK" container="w-3/12" margin='my-4' />
          </Link>
          <nav className="w-100 flex-none border-black flex-grow">
            <LinkItem />
          </nav>
          <SettingGroup />
        </div>

        <div className="w-10/12">
          <div className="max-w-6xl mx-auto px-8 py-6">
            <NoticeContextProvider>
              <Switch>
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/create" component={Create} />
                <Route exact path="/" component={Home} />
              </Switch>
            </NoticeContextProvider>
          </div>
        </div>
      </div>
    </Router>);
}

export default Main;