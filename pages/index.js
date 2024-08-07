import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbDrone } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import Image from 'next/image';
import dronecapture from '../public/dronecapture.jpg'; // Importing the drone capture image

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const splineRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const spline = splineRef.current;
    // Check if spline._children is defined before calling .find
    if (spline._children && Array.isArray(spline._children)) {
      const camera = spline._children.find((child) => child.isCamera);
      if (camera) {
        camera.position.y = scrollY / 100;
        camera.position.z = 10 - scrollY / 200;
      }
    }
  };

  useEffect(() => {
    // Scroll to top on refresh
    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".text-content");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Joshua Chang Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="spline-background">
        <Spline
          ref={splineRef}
          scene="https://prod.spline.design/01GXjdsOrrcMdFoh/scene.splinecode"
        />
      </div>
      <div className="scroll-indicator">
        <FiChevronDown className="scroll-down" style={{ fontSize: "2.5rem" }} />
      </div>
      <div className="content-container">
        <div className="scroll-content">
          <section id="projects" className="text-content fade">
            <h2>Projects</h2>
            <div className="projects-container">
              <div className="project-box">
                <h3>SiDG-ATRID</h3>
                <div className="thumbnail">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/gmdaVOeZyiQ?si=uR0RlJ8-CvzITXTC"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <a href="https://www.fakeurl.com" target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              </div>
              <div className="project-box">
                <h3>SWARMS</h3>
                <div className="thumbnail">
                  <Image src={dronecapture} alt="SWARMS" layout="responsive" />
                </div>
                <a href="https://www.fakeurl.com" target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              </div>
              <div className="project-box">
                <h3>IEEE Drone Chase</h3>
                <div className="thumbnail">
                  <Image src="https://via.placeholder.com/300x200" alt="IEEE Drone Chase" layout="responsive" width={300} height={200} />
                </div>
                <a href="https://www.fakeurl.com" target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
              </div>
            </div>
          </section>

          <section id="contact" className="text-content contact-section fade">
            <h2>Contact</h2>
            <p className="email">Email: chang529@purdue.edu</p>
          </section>

          <section id="links" className="text-content links-section fade">
            <h2>Links</h2>
            <div className="links-container">
              <div className="text-5xl flex justify-center gap-16 py-3">
                <a href="https://www.linkedin.com/in/joshua-chang-40/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin className="link-icon" />
                </a>
                <a href="https://github.com/robin6205" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="link-icon" />
                </a>
                <a href="https://www.swarmsim.io/" target="_blank" rel="noopener noreferrer">
                  <TbDrone className="link-icon" />
                </a>
              </div>
            </div>
          </section>

          <section id="resume" className="text-content resume-section fade">
            <h2>Resume</h2>
            <div className="resume-button-container">
              <a
                className="resume-button"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1L2yqpFs1VAkRFD7ktzHYkP6sq1-H3SAo/view",
                    "_blank"
                  )
                }
              >
                View
              </a>
            </div>
          </section>

          <section id="quote" className="text-content quote-section fade">
            <p className="quote">&quot;Somewhere, something incredible is waiting to be known.&quot; — Carl Sagan</p>
          </section>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&display=swap');

        .spline-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .content-container {
          position: relative;
          width: 100%;
          min-height: 350vh; /* Reduced length */
        }
        .header {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          text-align: center;
          z-index: 1;
        }
        .scroll-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          cursor: default; /* Change cursor to default */
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        .scroll-down {
          font-size: 3rem; /* Increase font size to make the logo bigger */
          color: white;
        }
        .scroll-content {
          position: relative;
          z-index: 2;
          margin-top: 100vh; /* Start the text content below the viewport */
        }
        .text-content {
          position: relative;
          color: black;
          background-color: rgba(255, 255, 255, 0.45); /* Translucent background */
          padding: 20px;
          width: 100%;
          box-sizing: border-box;
          margin-bottom: 450px; /* Add gap between sections */
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .contact-section .email {
          text-align: center;
          font-size: 2rem; /* Increase font size */
        }
        .text-content h2 {
          text-align: center;
          font-size: 2rem; /* Subtitle size */
          font-family: 'Space Grotesk', sans-serif;
          margin-bottom: 20px;
        }
        .projects-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .project-box {
          background: rgba(255, 255, 255, 0.7);
          border-radius: 15px;
          padding: 20px;
          width: 350px; /* Slightly wider */
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .project-box h3 {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .thumbnail {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
        }
        .project-box a {
          color: #0070f3;
          text-decoration: none;
          margin-bottom: 10px;
        }
        .project-box a:hover {
          text-decoration: underline;
        }
        .links-container {
          display: flex;
          justify-content: center;
          gap: 16px;
          padding: 20px 0;
        }
        .link-icon {
          color: black; /* Set link icons to black */
          transition: color 0.3s ease;
        }
        .link-icon:hover {
          color: #555; /* Subtle color change on hover */
        }
        .resume-button-container {
          display: flex;
          justify-content: center;
        }
        .resume-button {
          background-color: black;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-align: center;
        }
        .resume-button:hover {
          background-color: #333;
        }
        .quote-section {
          margin-top: 50px; /* Adding margin to create a gap between sections */
          text-align: center;
        }
        .quote {
          font-size: 2rem; /* Subtitle size */
          color: black;
          font-family: 'Space Grotesk', sans-serif;
        }
      `}</style>
    </div>
  );
}
