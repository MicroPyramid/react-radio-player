import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import promise from 'redux-promise';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/ui/Home';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import AboutUs from './components/static/AboutUs';
import PrivacyPolicy from './components/static/PrivacyPolicy';
import TermsAndConditions from './components/static/TermsAndConditions';
import FAQ from './components/static/FAQ';

var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <div>
        <Route exact path="/*" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us/" component={AboutUs} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/*" component={Footer} />
      </div>
    </Router>
  </Provider>,
    document.getElementById('app')
);
