import React, {useState} from 'react';
import './Profile.css';
import chineselogo from "../../images/ch-removed.png";
import frenchlogo from "../../images/fr-removed.png";
import uklogo from "../../images/uk-removed.png";
import catprofile from "../../images/cat-modified.png";


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
           <label className='title'>Name:<br></br><label className = 'label'>myName</label></label>
       </div>
       <div  className='thing'>
           <label className='title'>Email:<br></br><label className = 'label'>myEmail@gmail.com</label></label>
       </div>
       <div className='thing'>
           <label className='title'>Birthday:<br></br><label className = 'label'>03/10/2024</label></label>
          
       </div>
       <div  className='thing'>
           <label className='title'>Username:<br></br><label className = 'label'>myAmazingUsername</label></label>
           
       </div>
       <div  className='thing'>
           <label className='title'>Password:<br></br><label className = 'label'>************</label></label>
         
       </div>
   </div> 


       </div> 
   </div>


   <div className = "cimg">
       <img src = {catprofile} id="cat"></img>
       <h1>Hello Elisa!</h1>
   </div>


   </body>


  
   );  


};


export default Profile;