import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Overview from './Overview';
import Dashboard from './Dashboard';
import Create from './Create';
import Operating from './Operating';
import Setting from './Setting';
import Profile from './Profile';

import ImageContainer from '../components/util/ImageContainer';
import LinkItem from '../components/util/LinkItem';
import SettingGroup from '../components/util/SettingGroup';

import NoticeContextProvider from '../hooks/context/NoticeContext';
import OverviewContextProvider from '../hooks/context/OverviewContext';

import logo from '../assets/images/task.png';
import '../styles/customs/main.css';

const Main = ({ pass }) => {
  return (
    <Router>
      <div className="flex">
        {/* side bar */}
        <div className="side flex flex-col p-3 h-screen shadow-md fixed inset-y-0 left-0 transition-all duration-200">
          <Link to="/">
            <ImageContainer src={logo} size="100" text="TASK" container="w-3/12" margin='my-4' />
          </Link>
          <nav className="w-100 flex-none border-black flex-grow">
            <LinkItem />
          </nav>
          <SettingGroup pass={pass} />
        </div>
        {/* content */}
        <div className="content transition-all duration-200 overflow-auto">
          <div className="max-w-6xl mx-auto px-8 pt-6">
            <NoticeContextProvider>
              <OverviewContextProvider>
                <Switch>
                  <Route path="/create" component={Create} />
                  <Route exact path="/setting" component={Setting} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/operating" component={Operating} />
                  <Route exact path="/overview" component={Overview} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </OverviewContextProvider>
            </NoticeContextProvider>
          </div>
        </div>
      </div>
    </Router>);
}

export default Main;