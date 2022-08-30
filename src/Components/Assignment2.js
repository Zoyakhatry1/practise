import React from 'react';
import '../styles/Assignment2.scss';
import avatar from '../assets/assign2.jpg';

function Assignment2() {
  return (
    <div className="outercontainer">
        <div className="innercontainer">
            <div className='leftdiv'>
              <img src={avatar} alt="" />
              <h2>Salix Dubois</h2>
              <p>Programmer</p>
               <div className="btn1">
                  Follow
               </div>
               <div className="btn2">
                Message
               </div>
            </div>
            <div className="rightdiv1">
                <p className='count'>523</p>
                <p className='text'>Posts</p>
            </div>
            <div className="rightdiv2">
                <p className='count'>1387</p>
                <p className='text'>Likes</p>
            </div>
            <div className="rightdiv3">
               <p className='count'>146</p>
               <p className='text'>Followers</p>
            </div>
        </div>
    </div>
  )
}

export default Assignment2;