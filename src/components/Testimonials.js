import React from 'react';
import '../App.css';
import './Testimonials.css';
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  

function Testimonials() {
    return (
        <>
       <div id="skills" class="skills-main-section-container">
       <div class="skills-main-section-wrapper">
       <p class="small-tag-heading">Testimonials</p>
       <h2>What they say</h2>
       <div class="skills-quote-container">
        <div class="skills-box-wrapper-col">
        <div class="skills-box-wrapper-col-wrapper">
          
            <div class="skill-descriptionbox">
            <i class="fas fa-quote-left"></i>
            
            <p>I loved your enthusiasm and how much you were always helping me/us finding solutions for everything, you are a great asset to any team.</p>
            </div>
          
            </div>
         <div class="skills-img-mainbox">
          <img src={'../images/therese.png'} />
          <h3>Therese Helena Bienefelt <br/> <b>HeacockMedia</b></h3>
          
          </div>
        </div>
        <div class="skills-box-wrapper-col">
        <div class="skills-box-wrapper-col-wrapper">
        <div class="skill-descriptionbox">
            <i class="fas fa-quote-left"></i>
            
            <p>Very straight forward developer and can solve problems in a timely manner</p>
            </div>
          </div>
          <div class="skills-img-mainbox">
          <img src={'../images/benny.jpg'} />
          <h3>Ben O'Brian <br/> <b>Convertify</b></h3>
          
          </div>  
        </div>
        <div class="skills-box-wrapper-col">
        <div class="skills-box-wrapper-col-wrapper">
          <div class="skill-descriptionbox">
              <i class="fas fa-quote-left"></i>
              <p>Meticulous and is very easy to work with. Thank you so much for helping me out! did a good job on my sites.</p>
              </div>
                    </div>
                    <div class="skills-img-mainbox">
            <img src={'../images/trav.jpg'} />
            <h3>Travon Taylor <br/> <b>Living In Ones</b></h3>
            </div>
        </div>
       </div>
        </div>
        </div>
        </>
     );
  }

export default Testimonials;