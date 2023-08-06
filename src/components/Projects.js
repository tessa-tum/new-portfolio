import React from "react";
import { FiLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import filmflixAngularApp from "../assets/filmflix-angular-app.png"
import filmflixReactApp from "../assets/filmflix-react-app.png"
import filmflixApiApp from "../assets/filmflix-api-app.png"
import devtrecApp from "../assets/devtrec-app.png"
import nativeChatApp from "../assets/native-chat-app.png"
import pokeDexApp from "../assets/poke-dex-app.png"

const Projects = () => {

  return (
    <section id="projects" className="bg-mediumblue text-white px-9 sm:px-16 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="projects-info">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-white">Projects
          </h2>

          <p className="mb-12 text-lg">
            Here is a list of some of my projects.
          </p>

        </div>
      </div>
      <div className="projects container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-11 text-lg">
        <div className="projects-grid-item shadow-lg shadow-[black] rounded-md min-h-full" >
          <div className="item-image">
            <img
              className="rounded-md"
              src={filmflixAngularApp}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text p-8">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-white mb-2 mt-2 sm:mb-4 sm:mt-4">filmflix Angular</h4>
            <p>
              Full-stack web application that serves as a database for movie lovers. The frontend was developed with
              Angular and TypeScript. To ensure an intuitive UI, the app was designed with Angular Material. The UI is complemented
              by a pre-existing RESTful API and MongoDB database (see filmflix API).
            </p>

            <div className="item-links space-y-4 mt-8 mb-2">
              <a
                href="https://tessa-tum.github.io/filmflix-Angular-client/"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Live
                <span>
                  <FiLink size={14} className="ml-4" />
                </span>
              </a>
              <a
                href="https://github.com/tessa-tum/filmflix-Angular-client"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <span>
                  <FiGithub size={14} className="ml-4" />
                </span>
              </a>
            </div>

          </div>
        </div>

        <div className="projects-grid-item shadow-lg shadow-[black] rounded-md min-h-full">
          <div className="item-image">
            <img
              className="rounded-md"
              src={filmflixReactApp}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text p-8">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-white mb-2 mt-2 sm:mb-4 sm:mt-4">filmflix React</h4>
            <p>
              A fresh interpretation of the original filmflix app frontend, this time built with React and Javasript / JSX.
              The app uses React Router and Bootstrap for smooth navigation and a responsive UI desin. The UI is complemented
              by a pre-existing RESTful API and MongoDB database.
            </p>

            <div className="item-links space-y-4 mt-8 mb-2">
              <a
                href="https://filmflix-project.netlify.app/"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Live
                <span>
                  <FiLink size={14} className="ml-4" />
                </span>
              </a>
              <a
                href="https://github.com/tessa-tum/filmflix-client"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <span>
                  <FiGithub size={14} className="ml-4" />
                </span>
              </a>
            </div>

          </div>
        </div>

        <div className="projects-grid-item shadow-lg shadow-[black] rounded-md min-h-full">
          <div className="item-image">
            <img
              className="rounded-md"
              src={filmflixApiApp}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text p-8">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-white mb-2 mt-2 sm:mb-4 sm:mt-4">filmflix API</h4>
            <p>
              This RESTful API represents the backend of the filmflix app movie database. Frontend-Clients were built in React and
              Angular. The API itself was created using Node.js and Express.js and is connected to a MongoDB Atlas cloud database.
              Hosting is provided via Heroku.
            </p>

            <div className="item-links space-y-4 mt-8 mb-2">
              <a
                href="https://filmflix-api.herokuapp.com/"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Live
                <span>
                  <FiLink size={14} className="ml-4" />
                </span>
              </a>
              <a
                href="https://github.com/tessa-tum/filmflix-api"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <span>
                  <FiGithub size={14} className="ml-4" />
                </span>
              </a>
            </div>

          </div>
        </div>

        <div className="projects-grid-item shadow-lg shadow-[black] rounded-md min-h-full">
          <div className="item-image">
            <img
              className="rounded-md"
              src={devtrecApp}
              alt="placeholder-app-screenshots"
              width="100%"
            />
          </div>
          <div className="item-text p-8">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-white mb-2 mt-2 sm:mb-4 sm:mt-4">DevTrec app</h4>
            <p>
              A PWA that helps users to stay informed about upcoming web development events near
              or in their city. The app follows a test-driven development approach and uses serverless authentication (hosted on AWS).
              DevTrec uses the Google Calendar API to fetch and show upcoming events.
            </p>

            <div className="item-links space-y-4 mt-8 mb-2">
              <a
                href="https://tessa-tum.github.io/devtrec"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Live
                <span>
                  <FiLink size={14} className="ml-4" />
                </span>
              </a>
              <a
                href="https://github.com/tessa-tum/devtrec"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <span>
                  <FiGithub size={14} className="ml-4" />
                </span>
              </a>
            </div>

          </div>
        </div>

        <div className="projects-grid-item shadow-lg shadow-[black] rounded-md min-h-full">
          <div className="item-image">
            <img
              className="rounded-md"
              src={nativeChatApp}
              alt="pokedex-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text p-8">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-white mb-2 mt-2 sm:mb-4 sm:mt-4">Native chat app</h4>
            <p>
              A native chat app that allows users to enter a chat room, exchange messages,
              share locations and images, and read their messages offline. The app was built using Expo and
              React Native as well as Google Firestore/base. Chat funcionalities are
              provided by the Gifted Chat library.
            </p>

            <div className="item-links space-y-4 mt-8 mb-2">
              <a
                href="https://github.com/tessa-tum/chat-app"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <span>
                  <FiLink size={14} className="ml-4" />
                </span>
              </a>
            </div>

          </div>
        </div>

        <div className="projects-grid-item shadow-lg shadow-[black] rounded-md min-h-full">
          <div className="item-image">
            <img
              className="rounded-md"
              src={pokeDexApp}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text p-8">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-white mb-2 mt-2 sm:mb-4 sm:mt-4">Pokédex app</h4>
            <p>
              The app loads data from an external API (the PokéAPI) to display and provide details for 150 Pokémons.
              It was built using HTML, CSS, and vanilla JavaScript, and makes use of jQuery 3.6.3 and Bootstrap 5.3.0.
            </p>

            <div className="item-links space-y-4 mt-8 mb-2">
              <a
                href="https://tessa-tum.github.io/js-pokedex/"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Live
                <span>
                  <FiLink size={14} className="ml-4" />
                </span>
              </a>
              <a
                href="https://github.com/tessa-tum/js-pokedex"
                className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
              cursor-pointer hover:bg-white hover:text-darkblue hover:border-white"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <span>
                  <FiGithub size={14} className="ml-4" />
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;

