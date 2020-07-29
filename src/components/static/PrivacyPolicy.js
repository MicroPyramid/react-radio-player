import React, { Component } from 'react';

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <div className="privacy_policy">
        <div className="jumbotron">
          <h1>Privacy policy</h1>
        </div>
        <div className="container">
          <div className="col-11 privacy_policy_content">
           <p>This Privacy Policy is applicable for Radiostring.com application which is available 
           on all the devices like Desktop, Tablet, Mobile.</p>

            <p>This document is all about what information we will collect, how we use that 
            information, how we secure your data. We may change this document from time to time.</p>

            <h3>Users Information</h3>
            <p>We may collect your personal information such as Email-ID, Username, Mobile Number, 
            Location, Date of Birth, Gender and other information from your social account or from 
            your profile update in Radiostring.com.</p>
            <h3>Cookies Information</h3>
            <p>While you are using our website, we use cookies to store your data related to our 
            website for easy navigation. It will generate a unique ID for the user to improve the 
            user experience. Usually there are 2 types of cookies. One is session and other one is 
            persistent. Session cookie is temporary cookie and it will be removed once the user 
            closes the browser and Persistent cookie will remain in your browser even if you close 
            the browser. </p>
            <h3>Data Security</h3>
            <p>We use data protection procedures to secure your data, that we collected from you. We 
            won’t use your personal information for any marketing purposes without your approval.</p>
            <h3>Third Party Links</h3>
            <p>We may use Third Party websites in our website. Upon connecting to those websites, user 
            should check their website Terms & conditions, Privacy Policy before sharing your personal 
            information. We are not responsible for your data in accordance with the Third Party 
            websites. Because we won’t share your personal information with any third party links.</p>
            <h3>Contact</h3>
            <p>If you have any queries regarding our Privacy Policy, please send us an Email at 
            support@radiostring.com</p>
          </div> 
        </div>
      </div>
    );
  }
}
