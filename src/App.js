import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Negative Impacts of Social Media</h1>
        
      <img src="/User_1.png"/>
      <p> 1st Layer (User) - The facebook users. Most users choose to share their private information/pictures trusting facebook's security. Some users hack into other users' account to get access to senstive information. </p>

      <img src="Interface_2.jpg"/>
      <p> 2nd Layer (Interface) - The facebook app that users are using. Some accounts have been hacked to access private financial information or to demand money by impersonating as someone else. </p>

      <img src="Address_3.png"/>
      <p> 3rd Layer (Address) - The wifi that is enabling the user to use Interface. Any user who has access to wifi can use interface in their own ways. </p>

      <img src="City_4.jpg"/>
      <p> 4th Layer (City) - The wifi that Users are using. In our case, we access websites like Facebook through NYU's vpn</p>

      <img src="Cloud_5.jpg"/>
      <p> 5th Layer (Cloud) - The facebook serves around the globe which are enabling users to use facebook</p>

      <img src="Earth_6.jpg"/>
      <p> 6th Layer (Earth) - The facebook headquarters where all the activity information is monitored. Although facebook has developed their privacy and security, it still remains vulnerable to hacking and other crimes done through its accounts.</p>
    </div>
  );
}

export default App;
