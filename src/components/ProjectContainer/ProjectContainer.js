import React, { useState } from "react";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import img1 from "../../assets/p3.PNG";
import img2 from "../../assets/p4.PNG";
import img3 from "../../assets/p5.PNG";
import img4 from "../../assets/p1,1.PNG";
import img5 from "../../assets/p2.PNG";
import img6 from "../../assets/p7.PNG";
import img7 from "../../assets/p1.PNG";
import img8 from "../../assets/p8.PNG";
import img9 from "../../assets/p9.PNG";
import img10 from "../../assets/p1,2.PNG";
import img11 from "../../assets/p10 (1).jpeg";
import img12 from "../../assets/p11 (2).jpeg";


const ProjectContainer = () => {
  const [choosen, setChoosen] = useState(true);

  const client_projects = [
    {
      img: img1,
      title: "LIVE",
      desc:
        "In a world where everything is digital, don't forget to live in the real moments that matter. Choosing to live with purpose means turning ordinary days into extraordinary experiences.",
      link: "https://lnkd.in/gDGrZ6Bf",
    },
    {
      img: img2,
      title: "BMI CALCULATOR",
      desc:
        "Empowering professionals to prioritize well-being. Utilize our BMI calculator to kickstart your journey to a healthier and more resilient you.",
      link: "https://lnkd.in/gkzpwSYE",
    },
    {
      img: img3,
      title: "SIMPLE INTERESTE CALCULATOR",
      desc:
        
        "a simple interest calculator using React and wanted to share a bit about it!Simple interest is a fundamental financial concept where interest is calculated only on the principal amount. It's a useful tool to understand when managing finances or exploring investment opportunities.",
      link: " https://lnkd.in/gVbBapym",
    },
    {
      img: img4,
      title: "Traveling",
      desc: "Elevate your travel experience with our user-friendly app designed to make every adventure seamless and unforgettable. Discover, plan, and immerse yourself in the beauty of exploration ",
      link: "https://firegram-65fdc.web.app/",
    },
    {
      img: img5,
      title: "Headphone",
      desc: "Excited to explore the world of headphones? Check out this fantastic site I found for all things headphone-related",
      link: "https://reactexpensetracker.netlify.app/",
    },
    {
      img: img6,
      title: "DiscountCalculator",
      desc:
        "Say goodbye to complex calculations and hello to effortless savings! Our discount calculator app is designed to help you quickly and accurately determine discounts, making your shopping experience smarter and more budget-friendly.",
      link: "https://kanishku.github.io/discountcheckapp/",
    },
  ];

  const clone_works = [
    {
      img: img7,
      title: "MARVAL CLONE",
      desc:
        "Introducing Movie Mate - Your Ultimate Film Companion  Immerse yourself in a world of cinematic wonders with our user-friendly app. Discover, track, and explore movies effortlessly.",
      link: "https://creative-sorbet-96d1b6.netlify.app/",
    },
    {
      img: img8,
      title: "CHESS MASTER",
      desc:
        "Dive into the world of strategic brilliance and intellectual challenge with our feature-packed chess app. Whether you're a beginner or a seasoned grandmaster, our app is designed to enhance your chess experience, offering a blend of entertainment and improvement.",
      link: "https://kanishku.github.io/chess-master/",
    },
    {
      img: img9,
      title: "MOVIE MATE",
      desc:
        " Explore: Dive into an extensive database, explore trending films, and uncover hidden gems.",
      link: "https://lnkd.in/gdfqUmFa",
    },
    {
      img: img10,
      title: "WEATHER",
      desc:
        
"Experience Weather Reimagined with Our Innovative App! Unleash the power of precision in the palm of your hand with our weather app. Whether you're planning your day or staying ahead of the forecast, we've got you covered. ",
      link: "https://kanishku.github.io/weatherapp/",
    },
    {
      img: img11,
      title: "MediaApp",
      desc:
        
" Social Sharing: Connect with fellow movie enthusiasts, share your thoughts, and discover new favorites.",
      link: "",
    },
    {
      img: img12,
      title: "NEFLIX",
      desc:
        
" Original Masterpieces: Dive into exclusive Netflix Originals, featuring top-tier storytelling and production quality.. ",
      link: "https://kanishku.github.io/weatherapp/",
    },
    /*{
      img: img11,
      title: "Slack Clone",
      desc:
        "Clone of Slack with some functionalities like create new rooms, chat with the people in the rooms, etc.",
      link: "https://slack-clone-74fb8.firebaseapp.com/",
    },
    {
      img: img12,
      title: "Messenger Clone",
      desc:
        "Clone of Messenger with some functionalities like chat with everyone, etc.",
      link: "https://messenger-clone-441d6.web.app/",
    },
    {
      img: img13,
      title: "Tinder Clone",
      desc:
        "Clone of Tinder with some functionalities like choose or reject different people, etc.",
      link: "https://tinder-clone-19762.web.app/",
    },
    {
      img: img14,
      title: "Youtube Clone",
      desc:
        "Clone of Youtube with some functionalities like display random videos, etc.",
      link: "https://clone-65a08.web.app/",
    },
    {
      img: img15,
      title: "WhatsApp Clone",
      desc:
        "Clone of WhatsApp with some functionalities like create new groups, chat with different people, etc.",
      link: "https://whats-app-clone-5cab4.web.app/",
    },//*/
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which are changing many people lives and some
        clone works of large tech tack companies.
      </p>
      <div className="projectContainer__title">
        <h4
          className={choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(true)}
        >
           Projects
        </h4>
        <h4
          className={!choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(false)}
        >
          Clone Projects
        </h4>
      </div>

      {choosen ? (
        <div className="projectContainer__projects">
          {client_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <div className="projectContainer__projects">
          {clone_works.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      )}
    </Element>
  );
};

export default ProjectContainer;
