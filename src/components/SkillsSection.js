import React from 'react';
import '../App.css';
import './SkillsSection.css';
import SkillBar from 'react-skillbars'; 

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
        {type: "React sites", level: 60},
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
My interest in web development has lead me as I am today. I worked on a company called binaryanvil which is located at bacolod philippines, It is an ecommerece development firm which focuses on magento development. I worked there as a backend developer for 8 months then I decided to give a go to online freelancing and I fell inlove with it eversince. I worked on Wordpress websites "Affiliate" ,"Reviews" or "Online Market (Woocommerce)" and creating my own custom plugins. and have learned to fix any problems that is given to me and on to this day I am still honing my skill for best practices when it comes to development work. I am easy to work with and very reasonable and If you are interested please hit me up so that we can get started.
</p>

<h2 className='contact-me-heading'>Contact Me:</h2>
<div className='contact-me'>Skype: <a href="mailto:daleaustingangoso014@outlook.com">daleaustingangoso014@outlook.com</a></div>
<div className='contact-me'>Telephone: <a href="tel:09453229563">0945-322-9563</a></div>

</div>
    </div>
       </div> 
       </div>
       </>
  
     
    );
  }
  
  export default SkillsSection;
  