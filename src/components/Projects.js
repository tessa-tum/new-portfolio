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
              src={filmflixReactApp}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text p-8">
            <h4 className="text-2xl font-semibold text-white tracking-tighter mb-6 mt-4">filmflix app (React)</h4>
            <p>
            filmflix is a responsive web app designed for movie lovers who want to access information about 
            movies, manage their account and create a customized list of top-rated films. Built using React 
            and JavaScript, the app serves as a frontend for the filmflix RESTFUL API. 
            </p>
            <p className="mt-6 text-lightblue">Tech: JavaScript, JSX // React // Bootstrap // HTML // SCSS // Parcel</p>

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
              src={filmflixAngularApp}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text p-8">
            <h4 className="text-2xl font-semibold text-white tracking-tighter mb-6 mt-4">filmflix app (Angular)</h4>
            <p>
            A fresh interpretation of the original filmflix app frontend, this time built with Angular and Typescript. 
            The app uses Angular Router and RxJS for seamless navigation. Its UI is designed with Angular Material, 
            creating an intuitive and responsive look and feel.
            </p>
            <p className="mt-6 text-lightblue">Tech: Typescript // Angular // Angular Material // HTML // SCSS // Typedoc</p>

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
              src={filmflixApiApp}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text p-8">
            <h4 className="text-2xl font-semibold text-white tracking-tighter mb-6 mt-4">filmflix API</h4>
            <p>
            The filmflix app is powered by a RESTful API that seamlessly connects with its React and Angular frontend clients. 
            Created with Node.js and Express, the API is designed to provide reliable and fast access to a collection of movies stored
            in a MongoDB cloud database.
            </p>
            <p className="mt-6 text-lightblue">Tech: Javascript // Node.js + Express // MongoDB // mongoose // JSDoc</p>

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
            <h4 className="text-2xl font-semibold text-white tracking-tighter mb-6 mt-4">DevTrec app</h4>
            <p>
            DevTrec is a progressive web app that helps users stay informed about web development events 
            near or in their city. Built in React, the app follows a test-driven development approach and uses serverless 
            authentication. Data is being fetched from the Google Calendar API.
            </p>
            <p className="mt-6 text-lightblue">Tech: JavaScript, JSX // React // React Testing Library // HTML // CSS // 
            Node.js + Express // AWS Lambda // Google OAuth2 // Recharts library</p>

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
            <h4 className="text-2xl font-semibold text-white tracking-tighter mb-6 mt-4">Native chat app</h4>
            <p>
            Built with React Native and Expo, the app offers a chat interface where users can exchange messages, take and share an image, 
            share their geo location and re-read messages while being offline.  
            </p>
            <p className="mt-6 text-lightblue">Tech: JavaScript, JSX // React Native // Gifted Chat Library // Expo // Android Studio // 
            Google Firebase/store</p>

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
            <h4 className="text-2xl font-semibold text-white tracking-tighter mb-6 mt-4">Pokédex app</h4>
            <p>
            Responsive web application that loads data from an external API (the PokéAPI) to display and provide details for 
            the original 150 Pokémons. All data points are displayed as a list of buttons. When clicked, each button triggers 
            a modal that displays more information about a specific Pokémon.
            </p>
            <p className="mt-6 text-lightblue">Tech: JavaScript // Bootstrap // HTML // CSS // jQuery</p>

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

