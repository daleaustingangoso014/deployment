import React from 'react';
import '../App.css';
import './SkillsSection.css';
import SkillBar from 'react-skillbars'; 
import { Link } from 'react-router-dom';


function SkillsSection() {
    const skills = [
        
        {type: "Javascript", level: 75},
        {type: "PHP", level: 55},
        {type: "HTML", level: 75},
        {type: "CSS", level: 68},
        
        {type: "VueJs", level: 40},
        {type: "ReactJs", level: 60},
        {type: "SEO", level: 54},
      ];
    const skillstwo = [
        
        {type: "Wordpress", level: 90},
        {type: "Affiliate", level: 40},
        {type: "React Js", level: 60},
        {type: "Woocommerce", level: 45},
      ]; 
      const colors = {
        "bar": "#f6c783",
        "title": {
          "text": "#fff",
          "background": "#212536"
        }
      }  

    return (
       <>
       

       <div id="skills" className='skills-main-section-container'>
           <div className='skills-main-section-wrapper'>
           <div className='skills-main-section-inner'>
               
           <div class="container skill-blimp"  data-aos="fade-right">
           <p class="small-tag-heading">Proficiency</p>    
           <h2>Skills</h2>
           <SkillBar skills={skills} colors={colors} height={15}/>
           <h2>Platform</h2>
           <SkillBar skills={skillstwo} colors={colors} height={15}/>
           </div>
    <div className='skill-blimp-description' data-aos="fade-left" >
    <h2>About Me</h2>
    <p>
    A Web Developer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. Experience in Responsive Web Design, Developing user interface, testing, and debugging. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiency.
</p>
<p>
I am eager to obtain a challenging position at a prestigious company that will expand my learning and build upon my developer skills
</p>

<h2 className='contact-me-heading'>Contact Me:</h2>
<div className='contact-me'>Skype: <a href="mailto:daleaustingangoso014@outlook.com">daleaustingangoso014@outlook.com</a></div>
<div className='contact-me'>Telephone: <a href="tel:+639453229563">(+63) 945-322-9563</a></div>

<h2 className='contact-me-heading'>Follow or Add me on:</h2>

<div class='social-icons'>
              <Link
                
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>

</div>
    </div>
       </div> 
       </div>
       </>
  
     
    );
  }
  
  export default SkillsSection;
  