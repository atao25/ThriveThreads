import React, {useState} from 'react';
import './Profile.css';
import chineselogo from "../../images/ch-removed.png";
import frenchlogo from "../../images/fr-removed.png";
import uklogo from "../../images/uk-removed.png";
import catprofile from "../../images/cat.jpg";


// Functional component for the Profile Page
const Profile = () => {

return (
   <body>
<div className='side-bar'>
 <div className="profile">
 {/* Setting Section */}
 <div className="settings-section">
   <h2 className='headings'>Settings</h2>
   <hr></hr>
       <div className='thing'>
           <label className='title'>Name:</label>
           <br></br>
           <label className='info'>myName</label>
       </div>
       <div  className='thing'>
           <label className='title'>Email:</label>
           <br></br>
           <label className='info' >myEmail@gmail.com</label>
       </div>
       <div className='thing'>
           <label className='title'>Birthday:</label>
           <br></br>
           <label className='info'> 03/10/2024</label>
       </div>
       <div  className='thing'>
           <label className='title'>Username:</label>
           <br></br>
           <label className='info'>myAmazingUsername</label>
       </div>
       <div  className='thing'>
           <label className='title'>Password:</label>
           <br></br>
           <label className='info'>************</label>
       </div>
   </div> 


       {/* Personal Preferences Section */}
       <div className="preferences-section">
           <h2 className='headings'> Preferences</h2>
           <hr></hr>
           <div className='thing'>
               <label className='title'>Languages: </label> <br></br>
               <label className='language'>Chinese</label>
               <img src={chineselogo} id='chineselogo'></img>
               <br></br>
               <label className='language'>French</label>
               <img src={frenchlogo} id='frenchlogo'></img>
               <br></br>
               <label className='language'>English</label>
               <img src={uklogo} id='uklogo'></img>
              
           </div>
           </div>
       </div>
   </div>


   <div>
       <img src = {catprofile} id="cat"></img>
   </div>


   </body>


  
   );  


};


export default Profile;