import React, { Component } from 'react';

export default class FAQ extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="faq_terms">
          <div className="jumbotron">
            <h1>Frequently Asked Quesitions</h1>
          </div>
          <div className="container">
            <div className="col-11 faq_content">
              <h3>What is Radio String?</h3>
              <p>Radio String has huge list of live radio stations over 10 languages. You can 
              listen any station from all over the world and which is available 24/7.</p>
              <h3>How to Login to Radio String?</h3> 
              <p>You can login with your social networking sites(Facebook, Google) from your browser. 
              Click on Sign in button and connect with either Facebook or Google</p>
              <h3>Is Radio String Free?</h3>
              <p>Yes, Radio String is absolutely free. Where you listen songs from any live station 
              and any language across Hindi, English, Telugu, Tamil etc. But make sure to turn on 
              your WiFi or Mobile Data to listen songs</p>
              <h3>What kind of stations can I find in Radio String?</h3>
              <p>You can find stations in any kind of language and listen songs as per your mood 
              like Rock, Folk, Classic, Pop music</p>
              <h3>Can I access stations without login to Radio String?</h3>
              <p>Yes, you can also access stations without login too. But to create your Unique or 
              Favourite list you should be a member of Radio String. </p> 
              <h3>Are the stations available in all kind of languages?</h3>
              <p>Yes, there are more stations which are available over 10 languages like English, 
              Telugu, Tamil, Hindi etc.</p>
              <h3>How to track all my favourites in one place?</h3>
              <p>Make sure to create an account in Radio String to track all your favourite stations 
              in one place. All you need to do is,</p>
              <ul>
                <li>Login to Radio String with your social connections</li>
                <li>Choose your favourite station</li>
                <li>Add it to your favourite collection list</li>
              </ul>
              <h3>How many stations can I add it to favourites?</h3>
              <p>There is no limit in adding stations to your favourite collection. You can add 
              unlimited number of stations to favourites</p>
              <h3>Where can I access Radio String?</h3>
              <p>You can Radio String from any kind of devices like Web, Tablet, Mobile. You can 
              download Radio String app in mobile for easy use</p>
            </div>           
          </div>
        </div>
      </div>
    );
  }
}
