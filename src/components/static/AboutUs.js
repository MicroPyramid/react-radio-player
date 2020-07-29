import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="about_us">
          <div className="jumbotron">
             <h1>About Us</h1>
          </div>
          <div className="container">
            <div className="col-11 aboutus_content">
              <p>Radiostring.com is the best web radio streaming service providing a huge amount 
              of stations across worldwide. It was launched in 2017 and it can be accessed from 
              Desktop, Tablets, Mobile. The application will be available on all devices like 
              Android,iPhone, Windows mobiles.</p>

              <p>We provide high-quality audio stations over 10 languages such as English, Hindi, 
              Telugu, Tamil, Kannada, Bengali and many more languages. Radiostring.com is absolutely 
              free, where you can listen to live stations without paying for us. We are providing 
              stations in several categories like Pop, Rock, Folk Music etc. You can listen to any 
              category as per your mood.</p>

              <p>You can make your own favorite list in Radiosting.com. All you need to do is create 
              an account with us. To create an account, you can connect with your Facebook account 
              or Google account. After creating an account with us, you can add stations to favorites 
              and there is no limit of adding stations too.</p>

              <p>We are available 24/7, you can reach us through Email or Live Chat. Our support 
              team will ensure 100% uptime.</p>
            </div>
          </div>
          <div className="container">
            <div className="about_us_contact">
              <div className="contact_us">
                <h3>Contact US</h3>
                <p>How can we help you? Please feel free to contact us, if you have any queries or 
                suggestions or feedback. We are happy to help you!</p>
              </div>
              <div className="row">
                <div className="col-12 faq_form">
                  <h3>Questions about radiostring.com</h3>
                  <p><Link to="/faq">Check our FAQ</Link>, where you may find solution for your 
                  query. There are lot more questions available in the FAQ</p>
                  <p>*OR send us an email at support@radiostring.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
