import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import AppRouter from './routers/AppRouter';
import store, { history } from "./store";

import Header from './components/Header';
import SideBar from './components/SideBar';

class App extends Component {
  render() { 
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <React.Fragment>
          <Header />
          <SideBar />
          <div className="page-wrapper">
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Dashboard</h3>
              </div>
              <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
            <div className="container-fluid">
              <AppRouter />
            </div>
            <footer className="footer"> © 2018 All rights reserved. Template designed by <a href="https://colorlib.com">Colorlib</a></footer>
          </div>
        </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
