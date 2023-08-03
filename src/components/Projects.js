import React from "react";
import filmflixAngular from "../assets/filmflix-angular.png";
import filmflixReact from "../assets/filmflix-react.PNG";
import filmflixApi from "../assets/filmflix-api.PNG";
import devtrec from "../assets/devtrec.PNG";
import chatApp from "../assets/chat-app.png";
import pokedexApp from "../assets/pokedex-app.png";

const Projects = () => {
  
  return (
    <section id="projects" className="bg-mediumblue text-white px-9 sm:px-16 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="projects-info">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-white">Projects
          </h2>
          <p className="mb-12 text-lg">
            Check out some of my projects.
          </p>
        </div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-11 text-lg">

        <div className="projects-grid-item" >
          <div className="item-image">
            <img
              className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={filmflixAngular}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-green mb-2 mt-2 sm:mb-4 sm:mt-4">filmflix Angular</h4>
            <p>
              filmflix is a comprehensive full-stack web application that serves as a movie database and offers a seamless user
              experience. The frontend was developed using Angular / TypeScript and designed with Angular Material to ensure an
              intuitive UI. This UI complements a pre-existing RESTful API and MongoDB database, which can also be found here
              (see filmflix API).
            </p>
            <div className="item-links space-y-4">
              <a
                href="https://tessa-tum.github.io/filmflix-Angular-client/"
                className="btn px-4 py-2 mr-5 rounded-sm bg-green text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Live</a
              >
              <a
                href="https://github.com/tessa-tum/filmflix-Angular-client"
                className="btn px-4 py-2 mr-5 rounded-sm bg-green text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Code</a
              >
            </div>
          </div>
        </div>

        <div className="projects-grid-item">
          <div className="item-image">
            <img
              className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={filmflixReact}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-white mb-2 mt-2 sm:mb-4 sm:mt-4">filmflix React</h4>
            <p>
              filmflix React is a fresh interpretation of the original filmflix app frontend,
              this time built with React and Javasript / JSX. It uses, among others, React Router and
              React Bootstrap for smooth navigation as well as an intuitive and responsive UI. This UI
              complements a pre-existing RESTful API and MongoDB database, which can also be found here
              (see filmflix API).
            </p>
            <div className="item-links space-y-4">
              <a
                href="https://filmflix-project.netlify.app/"
                className="btn px-4 py-2 mr-5 rounded-sm bg-white text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Live</a
              >
              <a
                href="https://github.com/tessa-tum/filmflix-client"
                className="btn px-4 py-2 mr-5 rounded-sm bg-white text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Code</a
              >
            </div>
          </div>
        </div>

        <div className="projects-grid-item">
          <div className="item-image">
            <img
              className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={filmflixApi}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-turquoise mb-2 mt-2 sm:mb-4 sm:mt-4">filmflix API</h4>
            <p>
              This RESTful API represents the backend of the filmflix app movie database.
              It is built with Node.js and Express and is connected to a MongoDB Atlas cloud database.
              The API is hosted on Heroku.
            </p>
            <div className="item-links space-y-4">
              <a
                href="https://filmflix-api.herokuapp.com/"
                className="btn px-4 py-2 mr-5 rounded-sm bg-turquoise text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Live</a
              >
              <a
                href="https://github.com/tessa-tum/filmflix-api"
                className="btn px-4 py-2 mr-5 rounded-sm bg-turquoise text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Code</a
              >
            </div>
          </div>
        </div>

        <div className="projects-grid-item">
          <div className="item-image">
            <img
              className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={devtrec}
              alt="placeholder-app-screenshots"
              width="100%"
            />
          </div>
          <div className="item-text">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-pink mb-2 mt-2 sm:mb-4 sm:mt-4">DevTrec app</h4>
            <p>
              DevTrec is a progressive web application that helps users to stay informed about upcoming web development events near
              or in their city. The app has been built using test/behaviour-driven development techniques and is designed as a serverless
              PWA. DevTrec uses the Google Calendar API to fetch and show upcoming events. Serverless functions are hosted on AWS.
            </p>
            <div className="item-links space-y-4">
              <a
                href="https://tessa-tum.github.io/devtrec/"
                className="btn px-4 py-2 mr-5 rounded-sm bg-pink text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Live</a
              >
              <a
                href="https://github.com/tessa-tum/devtrec"
                className="btn px-4 py-2 mr-5 rounded-sm bg-pink text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Code</a
              >
            </div>
          </div>
        </div>

        <div className="projects-grid-item">
          <div className="item-image">
            <img
              className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={chatApp}
              alt="pokedex-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-tang mb-2 mt-2 sm:mb-4 sm:mt-4">Native chat app</h4>
            <p>
              This native chat app allows users to enter a chat room, exchange messages,
              share locations and images, and read their messages offline. The app is built using Expo and
              React Native as well as Google Firestore/base for storage and authentication. Chat funcionalities are
              provided by the React Native library Gifted Chat.
            </p>
            <div className="item-links space-y-4">
              <a
                href="https://github.com/tessa-tum/chat-app"
                className="btn px-4 py-2 mr-5 rounded-sm bg-tang text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Code</a
              >
            </div>
          </div>
        </div>

        <div className="projects-grid-item">
          <div className="item-image">
            <img
              className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src={pokedexApp}
              alt="placeholder-app-screenshot"
              width="100%"
            />
          </div>
          <div className="item-text">
            <h4 className="text-xl sm:text-2xl tracking-tighter text-yellow mb-2 mt-2 sm:mb-4 sm:mt-4">Pokédex app</h4>
            <p>
              The app loads data from an external API (the PokéAPI) to display and provide details for 150 Pokémons.
              All data points are displayed as a list of buttons. When clicked, each button triggers a modal that
              displays more details about a specific Pokémon. It is built using HTML, CSS, and JavaScript, and makes
              use of jQuery 3.6.3 and Bootstrap 5.3.0.
            </p>
            <div className="item-links space-y-4">
              <a
                href="https://tessa-tum.github.io/js-pokedex/"
                className="btn px-4 py-2 mr-5 rounded-sm bg-yellow text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Live</a
              >
              <a
                href="https://github.com/tessa-tum/js-pokedex"
                className="btn px-4 py-2 mr-5 rounded-sm bg-yellow text-darkblue"
                target="_blank"
                rel="noreferrer"
              >Code</a
              >
            </div>
          </div>
        </div>
      </div>

    </section>

  );

};

export default Projects;
