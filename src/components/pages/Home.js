import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import SkillsSection from '../SkillsSection';
import { Helmet } from 'react-helmet';
import Projects from '../ProjectsSection';
import ProjectsSection from '../ProjectsSection';

function Home() {
  return (
    <>
      <div className="application">
                <Helmet>
                    <script src="https://use.typekit.net/hello.js" type="text/javascript" />
                     <script>
                     
                     </script>
                </Helmet>
          
            </div>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default Home;