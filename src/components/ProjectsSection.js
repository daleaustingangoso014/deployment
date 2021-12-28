import React, { Component } from "react";
import './ProjectsSection.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <div className="outer-container">
            <div className="container">
            <p class="small-tag-heading">My Client</p>
            <h2>Projects</h2>
          <Slider {...settings}>
            <a href="https://www.howtohome.com/">
            <div className="project-box">
            <img src={'../images/project1.jpg'} />
              <p class="subhead-title">Website, Affiliate</p>
              <h3>HowToHome</h3>
              <p>Lorem Ipsum</p>
            </div>
            </a>
            <a href="https://www.merchantventurers.com/">
            <div className="project-box">
            <img src={'../images/merchant.png'} />
            <p class="subhead-title">Website, Company</p>
              <h3>Merchant Venturers</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </a>
            <a href="https://djwealthsystems.com/">
            <div className="project-box">
            <img src={'../images/djwealth.png'} />
            <p class="subhead-title">Website, Company</p>
              <h3>Dj Wealth Systems</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </a>
            <a href="https://austinairconditioner.org/">
            <div className="project-box">
            <img src={'../images/austinairconditioner.png'} />
            <p class="subhead-title">Website, Leads</p>
              <h3>Austin Air Conditioner</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </a>
            <a href="https://www.gerryrobert.com/">
            <div className="project-box">
            <img src={'../images/gerryroberts.png'} />
            <p class="subhead-title">Website, Company</p>
              <h3>Gerry Roberts</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </a>
            <a href="https://www.cleaningsanfrancisco.com/">
            <div className="project-box">
            <img src={'../images/cleaningsanfrancisco.jpg'} />
            <p class="subhead-title">Website, Leads</p>
              <h3>Cleaning San Francisco</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </a>
            <a href="http://www.dochera.com/">
            <div className="project-box">
            <img src={'../images/cc&ch.png'} />
            <p class="subhead-title">Website, Leads</p>
              <h3>CC & CH</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            </a>
          </Slider>
          </div>
        </div>
      );
    }
  }
  

