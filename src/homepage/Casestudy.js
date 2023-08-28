import React from "react";
import csMainView from "../assets/cs-main-view.png";
import csMovieViews from "../assets/cs-movie-views.png";
import csEndpoints from "../assets/cs-endpoints.png";
import csDataflow from "../assets/cs-data-flow.png";
import csChallenges from "../assets/cs-challenges.png"
import { FiLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Casestudy = () => {
  return (
    <section id="case" className="bg-darkblue py-32 text-white">
      <div className="container mx-auto px-9 sm:px-10 md:px-14 lg:px-22 xl:px-28 2xl:px-32 items-center justify-center md:justify-between">
        <h4 className="text-xl lg:text-2xl mb-7 text-lightblue w-fit px-3 py-1 rounded-md border-lightblue border">Case study</h4>
        <h2 className="text-4xl lg:text-5xl mb-8 sm:mb-12 text-white">filmflix web app</h2>

        <h3 className="text-3xl lg:text-4xl mb-8 text-white">Overview</h3>
        <p className="mb-10 text-lg">
          filmflix is a <span className="text-lightblue">responsive web application</span> designed for movie lovers who want to
          access information about movies, manage their user account, and create a customized list of top-rated films.
          The project includes a RESTful API, a NoSQL database storing movies and user data, and a single-page web application.
        </p>
        <div className="cs-img">
          <img
            src={csMainView}
            alt="placeholder-img"
            className="mb-10 rounded-md shadow-lg shadow-[black] h-auto sm:max-w-md"
          />
        </div>

        <h3 className="text-3xl lg:text-4xl mb-8 text-white">Context & objective</h3>
        <p className="mb-8 text-lg">
          The filmflix app is a personal project. I built it as part of my web development course at CareerFoundry to demonstrate
          my mastery of <span className="text-lightblue">full-stack JavaScript development.</span>
        </p>
        <p className="mb-8 text-lg">
          My goal was to design, create, and deploy a full-stack application using the latest technologies. This way, I would have an
          ambitious project to add to my portfolio that I developed from scratch and from start to finish, including a RESTful
          API (server-side), a responsive SPA (client-side), and a NoSQL database (MongoDB).
        </p>

        <h3 className="text-3xl lg:text-4xl mb-8 text-white">Duration</h3>
        <p className="mb-8 text-lg">
          The duration of this project was approximately <span className="text-lightblue">8 weeks: </span>4 weeks for the backend
          and 4 weeks for the frontend.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-10 md:px-14 lg:px-22 xl:px-28 2xl:px-32 py-4 items-center justify-center md:justify-between">
        <div className="bg-mediumblue px-6 py-8">

          <h3 className="text-3xl lg:text-4xl mb-8 text-white">Approach: server-side</h3>
          <p className="mb-10 text-lg">
            I developed a <span className="text-lightblue">RESTful API </span> using Node.js and Express, which interacts with a NoSQL database (MongoDB) that I also created.
            The API can be accessed via commonly used HTTP methods like GET or POST. CRUD methods are used to retrieve data from and store
            data in the database. All movie information is provided in JSON format.
          </p>
          <div className="cs-img">
            <img
              src={csEndpoints}
              alt="placeholder-img"
              className="mb-10 rounded-md shadow-lg shadow-[black] h-auto sm:max-w-md"
            />
          </div>

          <h4 className="text-xl lg:text-2xl mb-4 text-white">Database</h4>
          <p className="mb-8 text-lg">
            I developed a <span className="text-lightblue">non-relational database with MongoDB</span> that consists of two collections: movies and users.
            Database connection and data modelling are managed using Mongoose, a solution that simplifies data management for Node.js and MongoDB.
          </p>

          <h4 className="text-xl lg:text-2xl mb-4 text-white">Authentication & authorization</h4>
          <p className="mb-8 text-lg">
            I included user authentication and authorization code in the form of <span className="text-lightblue">basic HTTP authentication and JWT
              authentication.</span> Once a user has signed up, they need to log in with a username and password, which will return a JWT to ensure that
            only verified and authorized users can access the database and their information. User Authentication also leverages Passport, a powerful
            middleware, to ensure secure user registration, login, and session management.
          </p>

          <h4 className="text-xl lg:text-2xl mb-4 text-white">Testing and hosting</h4>
          <p className="mb-8 text-lg">
            In <span className="text-lightblue">Postman</span>, I tested all endpoints locally as well as live.
            The API is hosted on <span className="text-lightblue">Netlify.</span> The NoSQL database is hosted on
            <span className="text-lightblue">MongoDB Atlas.</span>
          </p>

          <h3 className="text-3xl lg:text-4xl mb-8 text-white">Approach: client-side</h3>
          <p className="mb-10 text-lg">
            After completing the API, I started <span className="text-lightblue">building the UI</span> required to make requests to
            and receive responses from the server-side. It's a responsive single-page application developed with React and React Bootstrap.
          </p>
          <div className="cs-img">
            <img
              src={csDataflow}
              alt="placeholder-img"
              className="mb-10 sm:mb-12 rounded-md shadow-lg shadow-[black] h-auto sm:max-w-md"
            />
          </div>

          <h4 className="text-xl lg:text-2xl mb-4 text-white">Build workflow</h4>
          <p className="mb-8 text-lg">
            <span className="text-lightblue">Parcel</span> is used as the build tool to automatically compile all of the files.
          </p>

          <h4 className="text-xl lg:text-2xl mb-4 text-white">Components/views and design</h4>
          <p className="mb-8 text-lg">
            React allows for the development of complex web applications by organizing them into <span className="text-lightblue">components</span>.
            These components can be further broken down into smaller components, making them easier to code, test, manage, and reuse.
            I used this approach, combined with <span className="text-lightblue">React Bootstrap</span>, to develop and style all of all the views.
            State routing is used to navigate between them.
          </p>
          <p className="mb-10 text-lg">
            The components include a <span className="text-lightblue">main view</span> (which shows a list of all movies), a
            <span className="text-lightblue"> single movie view</span> (which displays data about a single movie and
            allows users to add the movie to their list of favorites), a <span className="text-lightblue">login view</span>, a
            <span className="text-lightblue"> registration view</span>, and a <span className="text-lightblue">profile view</span> (where users can update their
            user data and list of favorites). I also implemented a simple search in the main view, allowing users to search for a movie by its title.
          </p>
          <div className="cs-img">
            <img
              src={csMovieViews}
              alt="placeholder-img"
              className="mb-10 rounded-md shadow-lg shadow-[black] h-auto sm:max-w-md"
            />
          </div>

          <h4 className="text-xl lg:text-2xl mb-4 text-white">Hosting</h4>
          <p className="text-lg">
            The filmflix SPA is hosted on <span className="text-lightblue">Netlify.</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-9 sm:px-10 md:px-14 lg:px-22 xl:px-28 2xl:px-32 pt-8 items-center justify-center md:justify-between">
        <h3 className="text-3xl lg:text-4xl mb-8 text-white">Overall thoughts and challenges</h3>
        <p className="mb-8 text-lg">
          Thanks to the abundance of libraries, resources, and online documentation available, building this web application was
          a fun endeavor that taught me a lot about creating full-stack projects.
        </p>
        <p className="mb-8 text-lg">
          I encountered some <span className="text-lightblue">challenges</span> but managed to overcome them, providing me with a valuable
          learning experience. For example, I had to find the right combination of tools/libraries and manage dependencies to ensure
          compatibility and the required functionality for a seamless app build. I achieved this through online research and problem-solving skills,
          which are essential for modern web developers.
        </p>
        <p className="mb-8 text-lg">
          Additionally, as the number of React components grew, maintaining a clear structure and flow for the app became increasingly challenging.
          To mitigate this, I found it crucial to organize files and folders and categorize components based on their function. By maintaining a well-structured
          codebase, the app became more easily scalable.
        </p>
        <p className="mb-10 text-lg">
          Another challenge I encountered was creating an appropriate look and feel without the help of a designer. I found React Bootstrap to be a helpful
          tool in this context as it provides some styles and functionality out of the box.
        </p>
        <div className="cs-img">
          <img
            src={csChallenges}
            alt="placeholder-img"
            className="mb-10 rounded-md shadow-lg shadow-[black] h-auto sm:max-w-md"
          />
        </div>

        <h3 className="text-3xl lg:text-4xl mb-8 text-white">Future steps</h3>
        <p className="mb-4 text-lg">
          Here are a few ideas to further enhance the user experience of filmflix:
        </p>
        <ul className="list-decimal pl-10 sm:pl-14 text-lg mb-8">
          <li>Expand the movie selection in the database.</li>
          <li>Create director and genre views to provide more information in those areas.</li>
          <li>Include information on actors.</li>
          <li>Add a "where to watch" section that links to online platforms for buying or streaming.</li>
          <li>Provide external resource links such as articles or blog posts.</li>
        </ul>

        <h3 className="text-3xl lg:text-4xl mb-8 text-white">Links</h3>

        <p className="mb-4 text-lg">filmflix demo (React):</p>
        <div className="flex flex-row">
          <a
            href="https://filmflix-project.netlify.app/login"
            className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
        cursor-pointer hover:bg-white hover:text-darkblue hover:border-white mb-4 text-lg"
            target="_blank"
            rel="noreferrer"
          >Live
            <span>
              <FiLink size={14} className="ml-4" />
            </span>
          </a>
          <a
            href="https://github.com/tessa-tum/filmflix-client"
            className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
        cursor-pointer hover:bg-white hover:text-darkblue hover:border-white mb-4 text-lg"
            target="_blank"
            rel="noreferrer"
          >Code
            <span>
              <FiGithub size={14} className="ml-4" />
            </span>
          </a>
        </div>

        <p className="mb-4 text-lg">filmflix demo (Angular):</p>
        <div className="flex flex-row">
          <a
            href="https://tessa-tum.github.io/filmflix-Angular-client/"
            className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
        cursor-pointer hover:bg-white hover:text-darkblue hover:border-white mb-4 text-lg"
            target="_blank"
            rel="noreferrer"
          >Live
            <span>
              <FiLink size={14} className="ml-4" />
            </span>
          </a>
          <a
            href="https://github.com/tessa-tum/filmflix-Angular-client"
            className="group text-white w-fit px-3 py-1 mr-4 rounded-md flex items-center border-white border 
        cursor-pointer hover:bg-white hover:text-darkblue hover:border-white mb-4 text-lg"
            target="_blank"
            rel="noreferrer"
          >Code
            <span>
              <FiGithub size={14} className="ml-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Casestudy;
