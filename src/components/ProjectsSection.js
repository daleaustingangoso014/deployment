import React, { Component , useState } from "react";
import './ProjectsSection.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  export default function SyncSlider() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
  
      return (
      <div id="projects" className="outer-container">
         <div className="container">
            <p class="small-tag-heading">My Client</p>
            <h2>Projects</h2>
        <Slider 
        asNavFor={nav2} 
        ref={(slider1) => setNav1(slider1)}>
            
            <div className="project-box">
            <div className="fi-mainbox">
            <img src={'../images/project1.jpg'} />
            </div>  
            <div className="descrption-mainbox">
            <p class="subhead-title">Website, Affiliate</p>
              <h3>HowToHome</h3>
              <p>This project is an affiliate website when I was working with David Heacock Founder of Filterbuy. The site is mostly custom build from the homepage set categories with their queries. latest articles would show up here when added so its dynamic. Also the site has post base product section that would link to amazon affiliates custom comparison charts and faqs section. </p>
              <a className="checksite-button" href="https://www.howtohome.com/">Check Site</a>
            </div> 
            </div>
            
            
            <div className="project-box">
            <div className="fi-mainbox">
            <img src={'../images/merchant.png'} />
            </div>
            <div className="descrption-mainbox">
            <p class="subhead-title">Website, Company</p>
              <h3>Merchant Venturers</h3>
              <p>The site is a revamp from its previous design. This site was revamped by me back in 2018 client is from United Kingdoms. The goal is to have an elegant and simple design implemented on the site. This is a custom site made on wordpress and the theme used was underscores. so its basically a custom theme, the site also has a membership section but no registration this is for invites only.</p>
              <a className="checksite-button" href="https://www.merchantventurers.com/">
              Check Site
              </a>
            </div>
            </div>
            
            
            <div className="project-box">
            <div className="fi-mainbox">
            <img src={'../images/djwealth.png'} /></div>
            <div className="descrption-mainbox"><p class="subhead-title">Website, Company</p>
              <h3>Dj Wealth Systems</h3>
              <p>This a portfolio project from my previous client. It is a redesign from an old design this uses avada theme. nothing special but the design is base on a mock up created by me.</p>
              <a className="checksite-button" href="https://djwealthsystems.com/">Check Site</a>
            </div>
            </div>
            
           
            <div className="project-box">
            <div className="fi-mainbox">
            <img src={'../images/austinairconditioner.png'} /></div>
            <div className="descrption-mainbox"><p class="subhead-title">Website, Leads</p>
              <h3>Austin Air Conditioner</h3>
              <p>This is a new site created for leads. The design is an inspiration to an old project. It uses generatepress theme coupled with beaver builder.</p>
              <a className="checksite-button" href="https://austinairconditioner.org/">Check Site</a>
            </div>
            </div>
            
            <div className="project-box">
            <div className="fi-mainbox"><img src={'../images/gerryroberts.png'} /></div>
            <div className="descrption-mainbox"><p class="subhead-title">Website, Company</p>
              <h3>Gerry Roberts</h3>
              <p>This site is when I was working with Black Card Books a Web Based organization on focusing on media advertising. Our main client was Gerry Robert. He is an Author and the founder of the company.</p>
              <a className="checksite-button" href="https://www.gerryrobert.com/">Check Site</a>
            </div>
            </div>
            <div className="project-box">
            <div className="fi-mainbox"><img src={'../images/cleaningsanfrancisco.jpg'} /></div>
            <div className="descrption-mainbox"><p class="subhead-title">Website, Leads</p>
              <h3>Cleaning San Francisco</h3>
              <p>This is a site from a previoius client. We had to redesign it from the ground top. this uses underscores theme and uses visual composer for the builder. This is an infromation website talking all about House Cleaning Services.</p>
              <a className="checksite-button" href="https://www.cleaningsanfrancisco.com/">Check Site</a>
            </div>
            </div>
            <div className="project-box">
            <div className="fi-mainbox"> <img src={'../images/cc&ch.png'} /></div>
            <div className="descrption-mainbox"><p class="subhead-title">Website, Leads</p>
              <h3>CC & CH</h3>
              <p>CC & CH is a local pediatrics company located on the philippines. Used oxygen builder to build the site. the site 
comprises with three pages only as this is a portfolio site.</p>
            <a className="checksite-button" href="http://www.dochera.com/">Check Site</a>
            </div>
            </div>
            
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          arrows={false}
          swipeToSlide={true}
          dots={true}
          focusOnSelect={true}
        >
            <div className="project-box">
            <img src={'../images/project1.jpg'} />
            </div>
            
             <div className="project-box">
            <img src={'../images/merchant.png'} /> 
            </div>
            
             <div className="project-box">
            <img src={'../images/djwealth.png'} /> 
            </div>

            <div className="project-box">
            <img src={'../images/austinairconditioner.png'} />
            </div>

            <div className="project-box">
            <img src={'../images/gerryroberts.png'} />
            </div>

            <div className="project-box">
            <img src={'../images/cleaningsanfrancisco.jpg'} />          
            </div>

            <div className="project-box">
            <img src={'../images/cc&ch.png'} />
            </div>
        </Slider>
      </div>
      </div>
    );
  }